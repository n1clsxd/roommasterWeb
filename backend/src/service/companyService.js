

function getCompanyByDomain (domain){ //workin
    query = `SELECT * FROM company  WHERE domain = \'${domain}\'`

    con.query(query, (err, rows) =>{
        if(err) throw err;
        console.log("Resultado: ")
        console.log(rows)
    })
}

//getCompanyByDomain('wises.com.br')

function postCompany(company){ // workin
    let params = ''
    for(var prop in company){
        params += (typeof prop == "string" ) ? `\'${company[prop]}\',` : `${company[prop]}`
    }

    query = 
    `INSERT INTO company
        (name,${(company.parentId ? ' parent_id,' : '')} type, domain) 
     VALUES 
        (${params.slice(0, -1)})`

    con.query(query, (err, result) =>{
        if(err) throw err;
        console.log("SUCCESS!")
        console.log("Resultado: ")
        console.log(company)
    })
    
}

//postCompany({name: 'Teste3', parentId: 7, type: 'F',domain: 'teste.com.br'})

function deleteCompany(){
    
}