module.exports = (server) => {
    const room = require('../controllers/room.controller')
    server.post("/room/create", room.create) //OK

    //server.get("/room/all", room.findAll)

    server.get("/room/byId", room.findById) //OK

    server.get("/room/byCompanyId", room.findByCompanyId) // OK

    server.put("/room/edit", room.edit)

    server.put("/room/softDelete", room.deactivate)

    server.delete("/room/hardDelete", room.delete)

}