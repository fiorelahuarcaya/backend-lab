module.exports = (sequelize, Sequelize) => {
	const Product = sequelize.define("products", {
	  categoria: {
		type: Sequelize.STRING,
		allowNull: false
	  },
	  producto: {
		type: Sequelize.STRING,
		allowNull: false
	  },
	  descripcion: {
		type: Sequelize.STRING,
		allowNull: false
	  },
	  proveedor: {
		type: Sequelize.STRING,
		allowNull: false
	  },
	  costo: {
		type: Sequelize.DECIMAL(10, 2),
		allowNull: false
	  },
	  venta: {
		type: Sequelize.DECIMAL(10, 2),
		allowNull: false
	  },
	  cantidad: {
		type: Sequelize.INTEGER,
		allowNull: false
	  }
	});
  
	return Product;
  };
  