const Room = require('../models/room.model')

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    console.log("Requisition object: " + req.body)
    const room = req.body;
    Room.create(room, (err, data) => {
        if (err) {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Room."
            });
        }

        else res.send(data);
    })
}

exports.findById = (req, res) => {
    console.log(req.headers.id)
    Room.findById(req.headers.id, (err, data) => {
        console.log("procurando por por ", req.headers.id)
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Room with id ${req.headers.id}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving Room with id " + req.headers.id
                });
            }
        } else res.send(data);
    })
}

exports.findByCompanyId = (req, res) => {
    console.log("id passado ", req.headers)
    Room.findByCompanyId(req.headers.company_id, (err, data) => {
        console.log("procurando por por ", req.headers.company_id)
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Room with company_id ${req.headers.company_id}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving Room with company_id " + req.headers.company_id
                });
            }
        } else res.send(data);
    })
}

exports.findByDomain = (req, res) => {

}

exports.edit = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "cannot be empty"
        })
        return
    }

    const room = new Room(req.body)
    console.log(`Requisition object (update in id ${req.headers.id}): "${room}`)
    Room.edit(req.headers.id, room, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Room with id ${req.headers.id}.`
                });
            } else {
                res.status(500).send({
                    message: "Could not update Room with id " + req.headers.id
                });
            }
        } else res.send(data);

    })
}

exports.deactivate = (req, res) => {
    if (!req.headers.id) {
        res.status(400).send({
            message: "cannot be empty"
        })
    }

    Room.deactivate(req.headers.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Room with id ${req.headers.id}.`
                });
            } else {
                res.status(500).send({
                    message: "Could not delete Room with id " + req.headers.id
                });
            }
        } else res.send(data);
    })
}

exports.delete = (req, res) => {
    Room.delete(req.headers.id, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Room with id ${req.headers.id}.`
            });
          } else {
            res.status(500).send({
              message: "Could not delete Room with id " + req.headers.id
            });
          }
        } else res.send({ message: `Room was deleted successfully!` });
      });
}

