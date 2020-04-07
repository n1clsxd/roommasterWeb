const sql = require('../config/database')
const Company = function (company){
    this.name = company.name;
    this.domain = company.domain;
    this.parentId = company.parentId;
    this.type = (typeof this.parentId == 'undefined') ? 'M' : 'F'

}

Company.create = (company,result) => {
    let fields, params = ''

    fields = `(name,${(company.parentId ? ' parent_id,' : '')} type, domain)`

    for(var prop in company){
        params += (typeof prop == "string" ) ? `\'${company[prop]}\',` : `${company[prop]}`
    }
    params = params.slice(0, -1)
    
    ////////////////////////////////////

    const query = `INSERT INTO company ${fields} VALUES (${params})`
    console.log(query)
    sql.query(query, company, (err, res) =>{
        if(err) throw err;
        console.log("Created company: ", {id: res.insertId, ...company})
        console.log(company)
        result(null, {id: res.insertId, ...company})
    })
}



Company.findByDomain = (domain, result) =>{
    const query = `SELECT * FROM company  WHERE domain = \'${domain}\'`

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
    const query = `SELECT * FROM company  WHERE id = \'${id}\'`

    sql.query(`SELECT * FROM company  WHERE id = \'${id}\'`, (err, res) =>{
        console.log(err)
        if(err) throw err;
        
        console.log("Search resulter: ")
        console.log(res)
        result(null, res)
        return
    })
}

Company.delete = (id, result) => {
    sql.query("DELETE FROM company WHERE id = ?", id, (err, res) =>{
        if(err) throw err;
        console.log("Removed: ")
        console.log(res)
        result(null, res)
    })
}

module.exports = Company