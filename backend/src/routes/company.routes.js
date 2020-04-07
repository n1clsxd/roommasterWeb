module.exports = (server) =>{
    const company = require('../controllers/company.controller')
    server.post("/company/create", company.create)

    //server.get("/company/all", company.findAll)

    server.get("/company/byId", company.findById)

    server.get("/company/byDomain", company.findByDomain)

    server.delete("/company/delete", company.delete)

}