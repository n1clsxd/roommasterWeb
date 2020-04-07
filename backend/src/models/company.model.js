const sql = require('../config/database')
const Company = function (company){
    this.name = company.name;
    this.domain = company.domain;
    this.parentId = company.parentId;
    this.type = (typeof this.parentId == 'undefined') ? 'M' : 'F'

}

Company.create = (company,result) => {
    let fields, params = ''

    fields = `(name,${(company.parentId ? ' parent_id,' : '')} domain, type)`

    for(var prop in company){
        params += (typeof prop == "string" ) ? `\'${company[prop]}\',` : `${company[prop]}`
    }
    params = params.slice(0, -1)
    
    ////////////////////////////////////

    const query = `INSERT INTO company ${fields} VALUES (${params})`
    sql.query(query, company, (err, res) =>{
        if(err) throw err;
        console.log("Created company: ", {id: res.insertId, ...company})
        console.log(company)
        result(null, {id: res.insertId, ...company})
    })
}



Company.findByDomain = (domain, result) =>{
    const query = `SELECT * FROM company  WHERE domain = \'${domain}\' and isActive = true`

    sql.query(query, (err, res) =>{
        if(err) throw err;
        console.log("Search result: ")
        console.log(res)
        result(null, res)
        return
    })
}

Company.findById = (id, result) =>{
    //console.log("procurando por" + id)
    const query = `SELECT * FROM company  WHERE id = \'${id}\' and isActive = true`

    sql.query(`SELECT * FROM company  WHERE id = \'${id}\'`, (err, res) =>{
        console.log(err)
        if(err) throw err;
        
        console.log("Search resulter: ")
        console.log(res)
        result(null, res)
        return
    })
}
// UPDATE `room_master`.`company` SET `domain` = 'teste.comd.br' WHERE (`id` = '11');

Company.edit = (id, company, result) => {
    console.log("testeid ", id)
    console.log("testecomapnhia ", company)
    const query = `UPDATE company SET name = ?, domain = ?, parent_id = ?, type = ?, changeDate = ? WHERE id = ?`
    let values = Object.values(company)
    values.push(new Date(),id)
    const keys = Object.keys(company)

    values[keys.indexOf("type")] = values[keys.indexOf("parentId")] == undefined ? "M" : "F"
    console.log(values)
    sql.query( query, values, (err, res) => {
        if(err) throw err;
        console.log("Changed")
        console.log({id: id, ...company})
        result(null, {id: id, ...company})
    })
}

Company.deactivate = (id,result) =>{
    sql.query("UPDATE company SET isActive = false, changeDate = ? WHERE id = ?", [new Date(),id], (err, res) =>{
        if(err) throw err;
        console.log("Deactivated: ", id) 
        result(null, res)
    })
}

Company.delete = (id,result) => {
    sql.query("DELETE FROM company WHERE id = ?", id, (err, res) =>{
        if(err) throw err;
        console.log("Removed: ") 
        console.log(res)
        result(null, res)
    })
}

module.exports = Company