module.exports = (server) =>{
    const company = require('../controllers/company.controller')
    server.post("/company", company.create)

    server.get("/company", company.findAll)
    
    server.get("/company/:id", company.findById)

    //server.get("/company/:domain", company.findByDomain)

    server.delete("/company/:id", company.delete)

}