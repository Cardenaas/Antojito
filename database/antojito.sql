-- ANTOJITO - Modelo inicial de base de datos


CREATE DATABASE IF NOT EXISTS antojito CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE antojito;

CREATE TABLE roles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(30) NOT NULL UNIQUE
);

CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    correo VARCHAR(150) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    rol_id INT NOT NULL,
    activo BOOLEAN NOT NULL DEFAULT TRUE,
    creado_en TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_usuario_rol FOREIGN KEY (rol_id) REFERENCES roles(id)
);

CREATE TABLE categorias (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(60) NOT NULL UNIQUE,
    activa BOOLEAN NOT NULL DEFAULT TRUE
);

CREATE TABLE productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(120) NOT NULL,
    descripcion VARCHAR(255),
    precio DECIMAL(10,2) NOT NULL,
    emoji VARCHAR(10),
    categoria_id INT NOT NULL,
    disponible BOOLEAN NOT NULL DEFAULT TRUE,
    creado_en TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT ck_producto_precio CHECK (precio > 0),
    CONSTRAINT fk_producto_categoria FOREIGN KEY (categoria_id) REFERENCES categorias(id)
);

CREATE TABLE estados_pedido (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(30) NOT NULL UNIQUE,
    orden INT NOT NULL UNIQUE
);

CREATE TABLE metodos_pago (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(40) NOT NULL UNIQUE
);

CREATE TABLE tipos_entrega (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(30) NOT NULL UNIQUE
);

CREATE TABLE pedidos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT NOT NULL,
    estado_id INT NOT NULL,
    tipo_entrega_id INT NOT NULL,
    metodo_pago_id INT NOT NULL,
    direccion VARCHAR(200),
    subtotal DECIMAL(10,2) NOT NULL,
    domicilio DECIMAL(10,2) NOT NULL DEFAULT 0,
    total DECIMAL(10,2) NOT NULL,
    creado_en TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT ck_pedido_subtotal CHECK (subtotal >= 0),
    CONSTRAINT ck_pedido_domicilio CHECK (domicilio >= 0),
    CONSTRAINT ck_pedido_total CHECK (total >= 0),
    CONSTRAINT fk_pedido_usuario FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
    CONSTRAINT fk_pedido_estado FOREIGN KEY (estado_id) REFERENCES estados_pedido(id),
    CONSTRAINT fk_pedido_entrega FOREIGN KEY (tipo_entrega_id) REFERENCES tipos_entrega(id),
    CONSTRAINT fk_pedido_pago FOREIGN KEY (metodo_pago_id) REFERENCES metodos_pago(id)
);

CREATE TABLE detalle_pedido (
    id INT AUTO_INCREMENT PRIMARY KEY,
    pedido_id INT NOT NULL,
    producto_id INT NOT NULL,
    cantidad INT NOT NULL,
    precio_unitario DECIMAL(10,2) NOT NULL,
    observaciones VARCHAR(255),
    subtotal DECIMAL(10,2) NOT NULL,
    CONSTRAINT ck_detalle_cantidad CHECK (cantidad > 0),
    CONSTRAINT ck_detalle_precio CHECK (precio_unitario > 0),
    CONSTRAINT ck_detalle_subtotal CHECK (subtotal >= 0),
    CONSTRAINT fk_detalle_pedido FOREIGN KEY (pedido_id) REFERENCES pedidos(id),
    CONSTRAINT fk_detalle_producto FOREIGN KEY (producto_id) REFERENCES productos(id)
);

INSERT INTO roles (nombre) VALUES ('cliente'), ('admin');
INSERT INTO estados_pedido (nombre, orden) VALUES
    ('recibido', 1),
    ('preparacion', 2),
    ('listo', 3),
    ('entregado', 4),
    ('cancelado', 5);
INSERT INTO metodos_pago (nombre) VALUES ('efectivo'), ('tarjeta');
INSERT INTO tipos_entrega (nombre) VALUES ('domicilio'), ('recoger');
INSERT INTO categorias (nombre) VALUES ('Entradas'), ('Fuertes'), ('Bebidas'), ('Postres');

-- En la implementación real NO se almacenan contraseñas en texto plano.
-- password_hash debe contener el resultado de un algoritmo seguro como bcrypt/Argon2.
