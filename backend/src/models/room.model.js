const sql = require('../config/database')

const Room = function (room) {
    keys = Object.keys(room)
    keys.forEach((_e, i) => {
      this[keys[i]] = Object.values(room)[i]  
    });
}

Room.create = (room, result) => {
    console.log(room)
    let fields, params = ''
    fields = `company_id, name, seats, hasMedia, hasAir, area, location, latitude, longitude, schedule`
    params = ``
    for (var prop in room) {
        params += (typeof prop === "string") ? `\'${room[prop]}\',` : `${room[prop]}`
    }
    params = params.slice(0, -1)

    const query = `INSERT INTO room (${fields}) VALUES (${params})`
    sql.query(query, room, (err, res) => {
        if (err) throw err;
        console.log("Created room: ", { id: res.insertId, ...room })
        console.log(room)
        result(null, { id: res.insertId, ...room })

    })
}

Room.findById = (id, result) => {
    const query = `SELECT * FROM room  WHERE id = \'${id}\'`

    sql.query(query, (err, res) => {
        if (err) throw err;
        console.log("Search result: ")
        console.log(res)
        result(null, res)
        return
    })
}

Room.findByCompanyId = (companyId, result) => {
    const query = `SELECT * FROM room WHERE company_id = \'${companyId}\'`

    sql.query(query, (err, res) => {
        if (err) throw err;
        console.log("Search result: ")
        console.log(res)
        result(null, res)
        return
    })
}

Room.edit = (id, room, result) => {
    console.log("testeid ", id)
    console.log("testeroom ", room)
    let query = ``
    let keys = Object.keys(room)
    let values = Object.values(room)
    
    keys.push("changeDate")
    keys.forEach((element, index) => {
        keys[index] += ' = ? '
        console.log(keys[index])
    });
    values.push(new Date())
    console.log(keys)
    query = `UPDATE room SET ${keys} WHERE id = ${id}`
    
    sql.query(query, values, (err, res) => {
        if(err) throw err;
        console.log("Changed")
        console.log({id: id, ...room})
        result(null, {id: id, ...room})
    })
}
Room.deactivate = (id,result) =>{
    sql.query("UPDATE room SET isActive = false, changeDate = ? WHERE id = ?", [new Date(),id], (err, res) =>{
        if(err) throw err;
        console.log("Deactivated: ", id) 
        result(null, res)
    })
    
}
Room.delete = (id,result) => {
    sql.query("DELETE FROM room WHERE id = ?", id, (err, res) =>{
        if(err) throw err;
        console.log("Removed: ") 
        console.log(res)
        result(null, res)
    })
}

module.exports = Room