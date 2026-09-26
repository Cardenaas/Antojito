# Definición del proyecto — Antojito

## 1. Descripción general

**Antojito** es una plataforma web para la gestión de pedidos de un establecimiento de comida. Su propósito es permitir que los clientes consulten un menú digital, seleccionen productos, armen un carrito, realicen un pedido y consulten su estado e historial. Al mismo tiempo, permite que un administrador gestione los productos disponibles, consulte los pedidos recibidos y revise información de ventas.

La plataforma busca centralizar el proceso que inicia cuando un cliente selecciona un producto y termina cuando el pedido es entregado o recogido. El cliente interactúa principalmente con las pantallas de menú, detalle de producto, carrito, checkout, seguimiento e historial. El administrador utiliza un panel para administrar pedidos, productos y ventas.

La versión final del proyecto utilizará una base de datos para almacenar usuarios, roles, productos, categorías, pedidos y detalles de pedidos. El prototipo actual utiliza `localStorage` únicamente como mecanismo temporal mientras se implementa el backend y la conexión a la base de datos.

### Uso general

1. El usuario ingresa mediante la pantalla de inicio de sesión.
2. El sistema identifica si corresponde al rol **cliente** o **administrador**.
3. El cliente consulta el menú y selecciona productos disponibles.
4. Los productos seleccionados se agregan al carrito.
5. El cliente confirma el pedido, selecciona el tipo de entrega y el método de pago y registra los datos necesarios.
6. El pedido queda inicialmente en estado **Recibido**.
7. El cliente puede consultar el seguimiento y el historial de sus pedidos.
8. El administrador consulta los pedidos y actualiza su estado, administra los productos y consulta las ventas.

---

## 2. Problema

En un establecimiento de comida, la recepción y administración de pedidos puede involucrar varios procesos separados: consulta del menú, selección de productos, registro de datos de entrega, seguimiento del estado y control administrativo. Cuando estos procesos se realizan de manera manual o mediante herramientas independientes, aumenta la posibilidad de errores en la información del pedido, dificultades para consultar su estado y falta de centralización de los datos.

Antojito aborda este problema mediante una plataforma web que reúne en un mismo sistema el catálogo de productos, el carrito, el registro del pedido, el seguimiento y la administración. De esta manera, el cliente puede realizar el proceso sin depender de una interacción manual para cada etapa, mientras que el administrador dispone de una interfaz para consultar y gestionar los pedidos y productos.

El problema se concreta en las siguientes necesidades:

- El cliente necesita consultar rápidamente los productos disponibles y sus precios.
- El cliente necesita conocer el contenido y valor de su carrito antes de confirmar un pedido.
- El sistema necesita registrar información de entrega y método de pago asociada a cada pedido.
- El cliente necesita consultar el estado de un pedido después de realizarlo.
- El administrador necesita consultar los pedidos recibidos y actualizar su estado.
- El administrador necesita mantener actualizado el catálogo de productos.
- La información de pedidos debe conservarse para permitir consultas posteriores e historial de ventas.

La solución propuesta es centralizar estas operaciones en una única plataforma web respaldada por una base de datos.

---

## 3. Objetivos

### Objetivo general

Desarrollar una plataforma web para gestionar el proceso de pedidos de Antojito, permitiendo a los clientes consultar productos, realizar pedidos y hacer seguimiento de ellos, y proporcionando a los administradores herramientas para gestionar productos, pedidos y ventas.

### Objetivos específicos

1. **Centralizar el catálogo:** permitir que el cliente consulte los productos disponibles, sus categorías, precios y características desde una interfaz web.

2. **Gestionar pedidos:** permitir que un cliente agregue productos al carrito, modifique cantidades y confirme un pedido indicando tipo de entrega, dirección cuando corresponda y método de pago.

3. **Controlar el estado de los pedidos:** registrar cada pedido inicialmente como **Recibido** y permitir al administrador avanzar su estado mediante las etapas definidas por el sistema.

4. **Gestionar el catálogo:** permitir al administrador crear, editar y activar o desactivar productos sin eliminar su información histórica.

5. **Consultar información de pedidos:** permitir al cliente consultar sus pedidos y al administrador consultar los pedidos que pertenecen a la operación del establecimiento.

6. **Preparar una persistencia estructurada:** implementar en la versión final una base de datos que almacene usuarios, roles, productos, categorías, pedidos y detalles de pedidos, reemplazando el almacenamiento temporal del prototipo.

---

## 4. Stakeholders, actores y roles

### Stakeholders

| Stakeholder | Interés en el proyecto |
|---|---|
| Propietario o responsable de Antojito | Necesita controlar pedidos, productos y ventas del establecimiento. |
| Clientes | Necesitan consultar productos, realizar pedidos y conocer su estado. |
| Personal encargado de pedidos | Necesita consultar los pedidos y actualizar sus estados. |
| Equipo desarrollador | Diseña, implementa, prueba y mantiene la plataforma. |
| Docente de Programación Web | Evalúa el cumplimiento de los requisitos académicos y técnicos del proyecto. |

### Actores y roles

#### Cliente

El cliente es el usuario que realiza pedidos mediante la plataforma.

Puede:

- Iniciar sesión.
- Consultar el menú.
- Filtrar productos por categoría.
- Consultar el detalle de un producto.
- Agregar productos al carrito.
- Modificar cantidades del carrito.
- Seleccionar el tipo de entrega.
- Indicar dirección cuando solicita domicilio.
- Seleccionar método de pago.
- Confirmar pedidos.
- Consultar el seguimiento de sus pedidos.
- Consultar su historial de pedidos.
- Cerrar sesión.

#### Administrador

El administrador es el usuario encargado de gestionar la operación desde el panel administrativo.

Puede:

- Iniciar sesión como administrador.
- Consultar pedidos.
- Avanzar el estado de los pedidos según el flujo definido.
- Crear productos.
- Editar productos.
- Activar o desactivar productos.
- Consultar información de ventas.
- Cerrar sesión.

### Login

La plataforma requiere inicio de sesión para acceder a las funciones de usuario. El prototipo actual utiliza dos cuentas de prueba para representar los roles cliente y administrador. En la versión final, las credenciales deberán validarse contra la base de datos y las contraseñas no deberán almacenarse en texto plano.

El acceso se controla según el rol:

- Un **cliente** es dirigido al menú y no debe acceder a las funciones administrativas.
- Un **administrador** es dirigido al panel de pedidos y no debe utilizar las funciones exclusivas del cliente.

---

## 5. Alcance

### Incluye

El proyecto incluye las siguientes funcionalidades:

- Inicio de sesión con identificación de rol.
- Gestión de sesión y cierre de sesión.
- Consulta del menú de productos.
- Consulta de detalle de productos.
- Organización de productos por categorías.
- Control de disponibilidad de productos.
- Carrito de compras.
- Modificación de cantidades del carrito.
- Checkout del pedido.
- Selección entre domicilio y recoger en el establecimiento.
- Registro de dirección para pedidos a domicilio.
- Selección de método de pago.
- Registro de pedidos.
- Seguimiento del estado del pedido.
- Historial de pedidos del cliente.
- Administración de productos por parte del administrador.
- Consulta y gestión de pedidos por parte del administrador.
- Consulta de información de ventas.
- Persistencia definitiva mediante base de datos en la versión final.

### No incluye

En esta versión del proyecto no se contempla:

- Aplicación móvil nativa para Android o iOS.
- Integración real con plataformas externas de domicilios.
- Procesamiento real de pagos con bancos, tarjetas o pasarelas de pago.
- Integración con sistemas contables externos.
- Facturación electrónica oficial.
- Chat en tiempo real entre cliente y establecimiento.
- Notificaciones mediante SMS o WhatsApp.
- Gestión de proveedores o compras de inventario.
- Sistema de puntos, fidelización o cupones.
- Inteligencia artificial para recomendaciones de productos.
- Geolocalización automática del domicilio.

Cualquier funcionalidad que no esté incluida explícitamente en el alcance no forma parte de la versión definida para este proyecto, salvo que posteriormente se registre como un cambio en el historial del documento.

---

## 6. Funcionalidades

### Funcionalidades del cliente

**F-01. Inicio de sesión:** el cliente puede ingresar mediante correo electrónico y contraseña.

**F-02. Consulta del menú:** el cliente puede visualizar los productos disponibles, su categoría, precio y descripción.

**F-03. Consulta de producto:** el cliente puede consultar información específica de un producto antes de agregarlo al carrito.

**F-04. Filtrado de productos:** el cliente puede consultar los productos según su categoría.

**F-05. Carrito de compras:** el cliente puede agregar productos disponibles, consultar el contenido del carrito y modificar cantidades.

**F-06. Checkout:** el cliente puede confirmar el pedido indicando tipo de entrega, dirección cuando sea necesaria y método de pago.

**F-07. Registro de pedido:** el sistema registra el pedido asociado al cliente y lo crea inicialmente en estado **Recibido**.

**F-08. Seguimiento:** el cliente puede consultar el estado actual de su pedido.

**F-09. Historial:** el cliente puede consultar los pedidos realizados anteriormente que le pertenecen.

**F-10. Cierre de sesión:** el cliente puede finalizar su sesión desde la plataforma.

### Funcionalidades del administrador

**F-11. Inicio de sesión administrativo:** el administrador puede ingresar mediante sus credenciales.

**F-12. Gestión de pedidos:** el administrador puede consultar los pedidos registrados.

**F-13. Actualización de estados:** el administrador puede avanzar el estado de un pedido siguiendo las etapas establecidas por la plataforma.

**F-14. Creación de productos:** el administrador puede registrar nuevos productos indicando su información principal.

**F-15. Edición de productos:** el administrador puede modificar la información de un producto existente.

**F-16. Activación y desactivación de productos:** el administrador puede controlar si un producto aparece como disponible para los clientes.

**F-17. Consulta de ventas:** el administrador puede consultar información resumida relacionada con las ventas y pedidos.

**F-18. Cierre de sesión administrativo:** el administrador puede finalizar su sesión.

### Correspondencia con el programa actual

Las funcionalidades anteriores corresponden a las pantallas que actualmente existen en el prototipo: `login.html`, `menu.html`, `producto.html`, `carrito.html`, `checkout.html`, `seguimiento.html`, `historial.html`, `admin-pedidos.html`, `admin-menu.html` y `admin-ventas.html`.

> **Nota de implementación:** las funcionalidades están actualmente simuladas con JavaScript y `localStorage`. La implementación final deberá reemplazar esa persistencia temporal por una API/backend conectada a una base de datos.
