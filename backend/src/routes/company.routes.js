module.exports = (server) =>{
    const company = require('../controllers/company.controller')
    server.post("/company/create", company.create) // OK

    //server.get("/company/all", company.findAll)

    server.get("/company/byId", company.findById) // OK

    server.get("/company/byDomain", company.findByDomain) // OK

    server.put("/company/edit", company.edit) // OK

    server.put("/company/softDelete", company.deactivate)

    server.delete("/company/hardDelete", company.delete)

}