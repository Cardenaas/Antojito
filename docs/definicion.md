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

## 7. Requerimientos funcionales

| ID | Requerimiento | Rol | Prioridad |
|---|---|---|---|
| RF-01 | El sistema debe permitir iniciar sesión con correo y contraseña, distinguiendo el rol cliente del rol administrador. | Todos | Alta |
| RF-02 | El sistema debe mostrar el catálogo de productos organizado por categoría. | Cliente | Alta |
| RF-03 | El sistema debe permitir consultar el detalle de un producto antes de agregarlo al carrito. | Cliente | Media |
| RF-04 | El sistema debe permitir filtrar los productos por categoría. | Cliente | Media |
| RF-05 | El sistema debe permitir agregar al carrito solo productos marcados como disponibles, y modificar sus cantidades. | Cliente | Alta |
| RF-06 | El sistema debe permitir confirmar el pedido indicando tipo de entrega (domicilio o recoger), dirección cuando aplique, y método de pago. | Cliente | Alta |
| RF-07 | El sistema debe calcular automáticamente subtotal, costo de domicilio y total del pedido. | Cliente | Alta |
| RF-08 | El sistema debe registrar el pedido en estado "Recibido" al confirmarse el checkout. | Cliente | Alta |
| RF-09 | El sistema debe permitir al cliente consultar el estado actual de su pedido. | Cliente | Alta |
| RF-10 | El sistema debe permitir al cliente consultar su historial de pedidos anteriores. | Cliente | Media |
| RF-11 | El sistema debe permitir al cliente cerrar sesión. | Cliente | Baja |
| RF-12 | El sistema debe permitir al administrador consultar todos los pedidos registrados. | Administrador | Alta |
| RF-13 | El sistema debe permitir al administrador avanzar el estado de un pedido siguiendo el orden establecido (recibido → preparación → listo → entregado). | Administrador | Alta |
| RF-14 | El sistema debe permitir al administrador crear nuevos productos con su información principal. | Administrador | Alta |
| RF-15 | El sistema debe permitir al administrador editar la información de un producto existente. | Administrador | Media |
| RF-16 | El sistema debe permitir al administrador activar o desactivar un producto. | Administrador | Media |
| RF-17 | El sistema debe permitir al administrador consultar un reporte de ventas (unidades vendidas por producto e ingresos por categoría). | Administrador | Media |
| RF-18 | El sistema debe permitir al administrador cerrar sesión. | Administrador | Baja |

## 8. Requerimientos no funcionales

| ID | Categoría | Requerimiento |
|---|---|---|
| RNF-01 | Seguridad | Las contraseñas se almacenan como `password_hash` mediante un algoritmo seguro (bcrypt/Argon2), nunca en texto plano. |
| RNF-02 | Seguridad | El acceso a las pantallas de administrador (`admin-*.html`) se restringe a usuarios con rol administrador, tanto en la interfaz como en el servidor. |
| RNF-03 | Usabilidad | La interfaz se diseña mobile-first, con un contenedor principal pensado para anchos de teléfono (~440 px) y adaptable a pantallas más grandes. |
| RNF-04 | Compatibilidad | La plataforma funciona en las versiones vigentes de Chrome, Edge y Firefox. |
| RNF-05 | Rendimiento | El catálogo de productos debe cargar en menos de 2 segundos con conexión estable. |
| RNF-06 | Mantenibilidad | El modelo de datos usa catálogos normalizados (roles, estados_pedido, metodos_pago, tipos_entrega) en vez de valores de texto libres, para facilitar cambios futuros sin modificar código. |
| RNF-07 | Disponibilidad | La plataforma debe estar disponible durante el horario de atención del restaurante. |

## 9. Reglas de negocio

**RN-01.** Un pedido no puede registrarse vacío; debe tener al menos un producto en el detalle.

**RN-02.** Solo se pueden agregar al carrito productos marcados como disponibles (`disponible = TRUE`).

**RN-03.** El estado de un pedido solo avanza en el orden definido por `estados_pedido.orden` (recibido → preparación → listo → entregado), salvo cancelación.

**RN-04.** Solo el administrador puede cambiar el estado de un pedido.

**RN-05.** El total del pedido se calcula automáticamente: `total = subtotal + domicilio`.

**RN-06.** Un cliente solo puede consultar y cancelar sus propios pedidos.

**RN-07.** Un producto con pedidos activos asociados no se elimina; se desactiva (`disponible = FALSE`).

**RN-08.** La dirección de entrega es obligatoria únicamente cuando el tipo de entrega es "domicilio".

## 10. Modelo de datos

| Entidad | Atributos principales |
|---|---|
| roles | id, nombre |
| usuarios | id, nombre, correo, password_hash, rol_id, activo, creado_en |
| categorias | id, nombre, activa |
| productos | id, nombre, descripcion, precio, emoji, categoria_id, disponible, creado_en |
| estados_pedido | id, nombre, orden |
| metodos_pago | id, nombre |
| tipos_entrega | id, nombre |
| pedidos | id, usuario_id, estado_id, tipo_entrega_id, metodo_pago_id, direccion, subtotal, domicilio, total, creado_en |
| detalle_pedido | id, pedido_id, producto_id, cantidad, precio_unitario, observaciones, subtotal |

**Relaciones:** un rol tiene muchos usuarios. Un usuario (cliente) tiene muchos pedidos. Una categoría tiene muchos productos. Un pedido tiene muchos detalle_pedido, y cada detalle_pedido referencia un producto. Un pedido referencia un estado_pedido, un tipo_entrega y un metodo_pago. El esquema completo, con las restricciones (`CHECK`, llaves foráneas) y los datos iniciales de catálogo, está en `database/antojito.sql`.

## 11. Pantallas y flujo

| Pantalla | Rol | Para qué sirve |
|---|---|---|
| `login.html` | Todos | Iniciar sesión según el rol (cliente o administrador). |
| `menu.html` | Cliente | Consultar el catálogo de productos filtrado por categoría. |
| `producto.html` | Cliente | Ver el detalle de un producto y agregarlo al carrito. |
| `carrito.html` | Cliente | Revisar y modificar las cantidades de los productos agregados. |
| `checkout.html` | Cliente | Elegir tipo de entrega, dirección (si aplica) y método de pago, y confirmar el pedido. |
| `seguimiento.html` | Cliente | Consultar el estado actual del pedido activo. |
| `historial.html` | Cliente | Consultar los pedidos anteriores del cliente. |
| `admin-pedidos.html` | Administrador | Consultar los pedidos registrados y avanzar su estado. |
| `admin-menu.html` | Administrador | Crear, editar y activar/desactivar productos del menú. |
| `admin-ventas.html` | Administrador | Consultar el reporte de ventas: unidades vendidas por producto e ingresos por categoría. |

**Flujo del cliente:** `login → menu → producto → carrito → checkout → seguimiento → historial`

**Flujo del administrador:** `login → admin-pedidos → admin-menu → admin-ventas` (las tres pantallas administrativas son independientes entre sí; el administrador navega libremente entre ellas después de iniciar sesión).

## 12. Mockup

El mockup de Antojito corresponde directamente al prototipo funcional en HTML/CSS incluido en este repositorio (`login.html`, `menu.html`, `producto.html`, `carrito.html`, `checkout.html`, `seguimiento.html`, `historial.html`, `admin-pedidos.html`, `admin-menu.html`, `admin-ventas.html`), ya que refleja con fidelidad cómo se verá la plataforma terminada.

*(Pendiente: agregar en `docs/mockup/` una captura de pantalla en `.png` por cada una de las 10 páginas listadas arriba, con una descripción de dos o tres líneas por imagen.)*

## 13. Historias de usuario, casos de uso, restricciones y supuestos

**Historias de usuario:**

- Como cliente, quiero consultar el menú por categorías, para encontrar rápido lo que quiero pedir.
- Como cliente, quiero ver el detalle de un producto antes de agregarlo, para decidir con información completa.
- Como cliente, quiero armar un carrito y modificar cantidades, para ajustar mi pedido antes de confirmarlo.
- Como cliente, quiero elegir entre domicilio o recoger en tienda, para adaptar el pedido a mi situación.
- Como cliente, quiero ver el estado de mi pedido, para saber cuánto falta para recibirlo.
- Como cliente, quiero consultar mi historial de pedidos, para repetir uno anterior fácilmente.
- Como administrador, quiero gestionar los productos del menú, para mantenerlo actualizado.
- Como administrador, quiero ver los pedidos registrados y avanzar su estado, para organizar la cocina.
- Como administrador, quiero consultar un reporte de ventas, para saber qué productos se venden más.

**Casos de uso:**

*Realizar pedido*
- Actor: Cliente. Precondición: sesión iniciada, al menos un producto en el carrito.
- Flujo: revisa el carrito, elige tipo de entrega y método de pago (indica dirección si es domicilio), confirma; el sistema calcula el total y registra el pedido en estado "Recibido".
- Excepción: si falta la dirección para un pedido a domicilio, el sistema no permite confirmar y solicita completarla (RN-08).

*Gestionar pedidos*
- Actor: Administrador. Precondición: sesión iniciada, al menos un pedido registrado.
- Flujo: entra a `admin-pedidos.html`, consulta los pedidos, abre uno y avanza su estado.
- Excepción: si intenta saltarse un estado, el sistema no lo permite y muestra cuál es el siguiente estado válido (RN-03).

*Gestionar productos del menú*
- Actor: Administrador. Precondición: sesión iniciada.
- Flujo: entra a `admin-menu.html`, crea o edita un producto, o cambia su disponibilidad.
- Excepción: si intenta eliminar un producto con pedidos activos asociados, el sistema lo desactiva en vez de eliminarlo (RN-07).

**Restricciones:**
- Tiempo: 7 semanas, la mitad del semestre.
- Equipo: 2 personas.
- El proyecto debe llevar frontend, backend y base de datos completos; el prototipo actual usa `localStorage` como reemplazo temporal mientras se conecta el backend (ver `docs/estado-implementacion.md`).
- No se maneja pago real, solo simulación.
- Es un solo restaurante, no un marketplace.

**Supuestos:**
- Se asume que Antojito opera en un solo local físico.
- Se asume que los domicilios los reparte personal propio del restaurante, sin rastreo por GPS.
- Se asume una única moneda (pesos colombianos) y una sola zona horaria para todos los pedidos.

## Historial de cambios

| Fecha | Qué cambió | Quién |
|---|---|---|
| 2026-09-25 | Versión inicial: descripción general, problema, objetivos, stakeholders, alcance y funcionalidades. | Equipo |
| 2026-09-26 | Se agregan las secciones 7 a 13 (requerimientos, reglas de negocio, modelo de datos, pantallas, mockup e historias/casos de uso), alineadas con el esquema SQL y el prototipo HTML ya construidos. | Equipo |

## Referencias

- Mozilla Developer Network, "Formularios web". Consultada como referencia para la validación de los campos del carrito y el checkout (sección 7, RF-06 y RF-07). Enlace: developer.mozilla.org/es/docs/Learn/Forms
- MySQL 8.0 Reference Manual, "CREATE TABLE Statement". Consultada como referencia para las restricciones (`CHECK`, llaves foráneas) del esquema en `database/antojito.sql` (sección 10). Enlace: dev.mysql.com/doc/refman/8.0/en/create-table.html

## Declaración de uso de inteligencia artificial

Usamos Claude (Anthropic) como asistente de IA principalmente para estructurar y redactar el documento `docs/definicion.md` en algunas secciones pedidas por la actividad. Le entregamos información real de nuestro proyecto ya construido: el código de las páginas HTML y CSS, el esquema de base de datos de `database/antojito.sql`, y el `README.md` con el estado de la implementación. Le pedimos que organizara esa información en el formato de la actividad, que redactara los requerimientos funcionales y no funcionales a partir de las funcionalidades ya construidas, y que propusiera historias de usuario y casos de uso coherentes con las reglas de negocio que ya teníamos definidas.

Aceptamos la mayor parte del texto generado tal cual, después de revisar que cada sección correspondiera con lo que realmente construimos (pantallas, esquema de datos, reglas de negocio). Ajustamos manualmente las partes que mencionaban tecnología que no íbamos a usar en la entrega final (se descartó una versión que asumía un backend en Python con SQLite, y se dejó la versión que corresponde al prototipo real con `localStorage`). El problema original, el código del prototipo (HTML, CSS, JavaScript) y el diseño del esquema de base de datos fueron creados por el equipo antes de usar la IA para este documento.