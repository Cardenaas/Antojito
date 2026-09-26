#INTEGRANTES: Santiago Giraldo, Juan Esteban Cardenas 


# Antojito

Plataforma web para la gestión de pedidos de un negocio de comida.

## Roles
- **Cliente:** consulta el menú, agrega productos al carrito, realiza pedidos, consulta seguimiento e historial.
- **Administrador:** gestiona pedidos, productos y consulta estadísticas de ventas.

## Estado actual
El proyecto contiene el prototipo funcional del frontend. En esta etapa usa `localStorage` para simular persistencia, sesiones y datos mientras se implementa el backend.

## Estructura
- Páginas HTML del cliente y administrador.
- `script.js`: lógica compartida, validaciones, sesión, carrito y pedidos.
- `styles.css`: estilos de la interfaz.
- `database/antojito.sql`: modelo inicial de la base de datos.
- `docs/`: espacio para definición, mockups y presentación.

## Credenciales de prueba del prototipo
- Cliente: `cliente@antojito.com` / `cliente123`
- Administrador: `admin@antojito.com` / `admin123`

> Estas credenciales son únicamente para el prototipo. En la implementación final las cuentas deben consultarse desde la base de datos y las contraseñas deben almacenarse mediante hash seguro.
