const sql = require('../config/database')

const User = function (user) {
    this.companyId = user.companyId
    this.name = user.name
    this.email = user.email
    this.password = user.password
}

User.create = (user, result) => {
    console.log(user)
    let fields, params = ''
    fields = `company_id, name, email, password, role`

    params = ``
    for (var prop in user) {
        params += (typeof prop === "string") ? `\'${user[prop]}\',` : `${user[prop]}`
    }
    params = params.slice(0, -1)

    const query = `INSERT INTO user (${fields}) VALUES (${params})`
    sql.query(query, user, (err, res) => {
        if (err) {
            result(null, undefined)
        } else {
            console.log("Created user: ", { id: res.insertId, ...user })
            result(null, { id: res.insertId, ...user })
        };
    })


}
User.login = (credentials, result) => {
    let search = `\'${credentials.email}\' AND password = \'${credentials.password}\'`
    const query = `SELECT * FROM user WHERE email = ${search}`

    sql.query(query, (err, res) => {
        if (err) throw err;
        console.log("Search result: ")
        console.log(res)
        result(null, res)
        return
    })
}
module.exports = User