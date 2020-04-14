module.exports = (server) => {
    const user = require('../controllers/user.controller')
    server.post("/user/create", user.create)

    //server.get("/user/all", user.findAll)

    //server.get("/user/byId", user.findById)

    server.get("/user/login", user.login)

    server.get("/user/byCompanyId", user.findByCompanyId)

    server.put("/user/edit", user.edit)

    server.put("/user/softDelete", user.deactivate)

    server.delete("/user/hardDelete", user.delete)

}