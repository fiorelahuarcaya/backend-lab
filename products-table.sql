USE testdb;

CREATE TABLE products (
    id INT(11) NOT NULL AUTO_INCREMENT,
    categoria VARCHAR(255) NOT NULL,
    producto VARCHAR(255) NOT NULL,
    descripcion VARCHAR(255) NULL,
    proveedor VARCHAR(255) NULL,
    costo DECIMAL(10, 2) NOT NULL,
    venta DECIMAL(10, 2) NOT NULL,
    cantidad INT(11) NOT NULL,
    PRIMARY KEY (id)
);

select * from testdb.products ;