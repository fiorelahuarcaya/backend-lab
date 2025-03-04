const db = require("../models");
const Product = db.products;
const Op = db.Sequelize.Op;

// Create and Save a new Product
exports.create = (req, res) => {
  // Validate request
  if (!req.body.producto) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Product
  const product = {
    categoria: req.body.categoria,
    producto: req.body.producto,
    descripcion: req.body.descripcion,
    proveedor: req.body.proveedor,
    costo: req.body.costo,
    venta: req.body.venta,
    cantidad: req.body.cantidad
  };

  // Save Product in the database
  Product.create(product)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: 
          err.message || "Some error occurred while creating the Product."
      });
    });
};

// Retrieve all Products from the database.
exports.findAll = (req, res) => {
  const producto = req.query.producto;
  var condition = producto ? { producto: { [Op.like]: `%${producto}%` } } : null;

  Product.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: 
          err.message || "Some error occurred while retrieving products."
      });
    });
};

// Find a single Product with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Product.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Product with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Product with id=" + id
      });
    });
};

// Update a Product by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Product.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Product was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Product with id=${id}. Maybe Product was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Product with id=" + id
      });
    });
};

// Delete a Product with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Product.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Product was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Product with id=${id}. Maybe Product was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Product with id=" + id
      });
    });
};

// Delete all Products from the database.
exports.deleteAll = (req, res) => {
  Product.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Products were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message: 
          err.message || "Some error occurred while removing all products."
      });
    });
};

// Find all Products with a certain condition
exports.findAllWithCondition = (req, res) => {
  const condition = req.query.condition;
  var whereCondition = condition ? { conditionField: { [Op.like]: `%${condition}%` } } : null;

  Product.findAll({ where: whereCondition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: 
          err.message || "Some error occurred while retrieving products."
      });
    });
};
