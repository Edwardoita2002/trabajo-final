/*los comandos de mysql que he usado por alguna razon*/
DROP TABLE employee;
show tables;
describe employee;
SHOW DATABASES;
/*Esto es lo que utilise para crear la base de datos en mysql y
la tabla con las conlumnas*/
CREATE DATABASE IF NOT EXISTS companydb;

use companydb;
create table employee(
id int(11) not null auto_increment,
name varchar(45) default null,
salaty int(11) default null,
primary key(id)
);

/* esto es para agregar los datos*/

INSERT INTO employee VALUES
(1,'Joe',1000),
(2,'maria',900),
(3,'jose',500),
(4,'yukeiry',2000);

/*este se usa para ver las columnas*/

SELECT * FROM employee;

/*EL if null que hace es actualusar las rows solo cuando lem pasemos datos pero si no lo pasamos
este se quedara igual a como estaba*/
UPDATE employee SET name = IFNULL(?,name), salaty = IFNULL(?,salaty) WHERE id = ?;