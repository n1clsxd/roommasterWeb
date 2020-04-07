const Company = require('../models/company.model')
// Cria uma nova empresa
exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // const company = new Company({
  //     name: req.body.name,
  //     domain: req.body.domain,
  //     type: req.body.type,
  //     parentId: req.body.parentId
  // })
  console.log(typeof req.body)
  console.log(req.body)
  const company = req.body
  company.type = company.parentId == undefined ? "M" : "F"
  Company.create(company, (err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Customer."
      });
    }

    else res.send(data);
  })
};


// Acha empresa pelo ID
exports.findById = (req, res) => {
  console.log(req.headers.id)
  Company.findById(req.headers.id, (err, data) => {
    console.log("procurando por por ", req.headers.id)
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Company with id ${req.headers.id}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Company with id " + req.headers.id
        });
      }
    } else res.send(data);
  })
};

// Acha empresa pelo dominio
exports.findByDomain = (req, res) => {
  console.log("searching by domain " + req.headers.domain)
  Company.findByDomain(req.headers.domain, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Company with domain ${req.headers.domain}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Company with domain " + req.headers.domain
        });
      }
    } else res.send(data);
  })
};

exports.edit = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "cannot be empty"
    })
  }
  const company = new Company({
    name: req.body.name,
    domain: req.body.domain,
    type: req.body.type,
    parentId: req.body.parentId
  })
  Company.edit(req.headers.id, company, (err, data) => {
    console.log(req.headers.id)
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Company with id ${req.headers.id}.`
        });
      } else {
        res.status(500).send({
          message: "Could not update Company with id " + req.headers.id
        });
      }
    } else res.send(data);

  })
}

exports.deactivate = (req, res) => {
  if (!req.headers) {
    res.status(400).send({
      message: "cannot be empty"
    })
  }

  Company.deactivate(req.headers.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Company with id ${req.headers.id}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Company with id " + req.headers.id
        });
      }
    } else res.send(data);
  })

}

// Delete a Customer with the specified customerId in the request
exports.delete = (req, res) => {
  Company.delete(req.headers.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Company with id ${req.headers.id}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Company with id " + req.headers.id
        });
      }
    } else res.send({ message: `Company was deleted successfully!` });
  });
};