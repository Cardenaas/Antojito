/* =========================================================
   ANTOJITO — Lógica compartida del prototipo
   NOTA: localStorage solo simula la persistencia durante esta
   etapa. La entrega final debe reemplazarlo por backend + BD.
   ========================================================= */

const LS_PRODUCTOS = 'antojito_productos';
const LS_CARRITO = 'antojito_carrito';
const LS_PEDIDOS = 'antojito_pedidos';
const LS_ULTIMO_PEDIDO = 'antojito_ultimo_pedido';
const LS_SESION = 'antojito_sesion';

const ORDEN_ESTADOS = ['recibido', 'preparacion', 'listo', 'entregado'];
const NOMBRE_ESTADO = {
    recibido: 'Recibido',
    preparacion: 'En preparación',
    listo: 'Listo',
    entregado: 'Entregado',
    cancelado: 'Cancelado'
};

function fmt(n) {
    return '$' + Math.round(Number(n) || 0).toLocaleString('es-CO');
}

/* ---------- Sesión y roles ---------- */
function getSesion() {
    try { return JSON.parse(localStorage.getItem(LS_SESION) || 'null'); }
    catch { return null; }
}

function iniciarSesion(cuenta) {
    localStorage.setItem(LS_SESION, JSON.stringify({
        id: cuenta.id,
        nombre: cuenta.nombre,
        correo: cuenta.correo,
        rol: cuenta.rol,
        inicio: new Date().toISOString()
    }));
}

function cerrarSesion() {
    localStorage.removeItem(LS_SESION);
    localStorage.removeItem(LS_ULTIMO_PEDIDO);
    window.location.href = 'login.html';
}

function exigirSesion(rolRequerido) {
    const sesion = getSesion();
    if (!sesion) {
        window.location.replace('login.html');
        return null;
    }
    if (rolRequerido && sesion.rol !== rolRequerido) {
        window.location.replace(sesion.rol === 'admin' ? 'admin-pedidos.html' : 'menu.html');
        return null;
    }
    return sesion;
}

function exigirCliente() { return exigirSesion('cliente'); }
function exigirAdmin() { return exigirSesion('admin'); }

/* ---------- Productos (menú) ---------- */
function productosDefault() {
    return [
        { id: 1, nombre: 'Arepa de choclo', categoria: 'Entradas', precio: 8500, disponible: true, emoji: '🌽', desc: 'Con queso derretido' },
        { id: 2, nombre: 'Antojito burger', categoria: 'Fuertes', precio: 19900, disponible: true, emoji: '🍔', desc: 'Doble carne, tocineta' },
        { id: 3, nombre: 'Papas criollas', categoria: 'Entradas', precio: 7000, disponible: true, emoji: '🍟', desc: 'Con suero costeño' },
        { id: 4, nombre: 'Jugo de lulo', categoria: 'Bebidas', precio: 6000, disponible: false, emoji: '🥤', desc: 'Natural, sin azúcar' },
        { id: 5, nombre: 'Flan de café', categoria: 'Postres', precio: 6500, disponible: true, emoji: '🍮', desc: 'Casero, porción individual' },
        { id: 6, nombre: 'Empanadas x3', categoria: 'Entradas', precio: 9000, disponible: true, emoji: '🌮', desc: 'Carne o pollo, con ají' }
    ];
}

function getProductos() {
    let p = JSON.parse(localStorage.getItem(LS_PRODUCTOS) || 'null');
    if (!p) { p = productosDefault(); localStorage.setItem(LS_PRODUCTOS, JSON.stringify(p)); }
    return p;
}
function saveProductos(p) { localStorage.setItem(LS_PRODUCTOS, JSON.stringify(p)); }

function getProducto(id) {
    return getProductos().find(p => p.id === Number(id));
}

/* ---------- Carrito ---------- */
function getCarrito() { return JSON.parse(localStorage.getItem(LS_CARRITO) || '[]'); }
function saveCarrito(c) { localStorage.setItem(LS_CARRITO, JSON.stringify(c)); }

function agregarAlCarrito(productoId, cantidad, precioUnit, nota) {
    const producto = getProducto(productoId);
    if (!producto || !producto.disponible) return false;
    const qty = Number(cantidad);
    const precio = Number(precioUnit);
    if (!Number.isInteger(qty) || qty < 1 || qty > 20 || !Number.isFinite(precio) || precio <= 0) return false;

    const carrito = getCarrito();
    const existente = carrito.find(i => i.productoId === productoId && i.nota === (nota || ''));
    if (existente) existente.cantidad = Math.min(20, existente.cantidad + qty);
    else carrito.push({ productoId, cantidad: qty, precioUnit: precio, nota: nota || '' });
    saveCarrito(carrito);
    return true;
}

function cambiarCantidadCarrito(index, delta) {
    const carrito = getCarrito();
    if (!carrito[index]) return;
    carrito[index].cantidad += delta;
    if (carrito[index].cantidad <= 0) carrito.splice(index, 1);
    else carrito[index].cantidad = Math.min(20, carrito[index].cantidad);
    saveCarrito(carrito);
}

function totalCarrito() {
    return getCarrito().reduce((s, i) => s + Number(i.cantidad) * Number(i.precioUnit), 0);
}
function cantidadCarrito() {
    return getCarrito().reduce((s, i) => s + Number(i.cantidad), 0);
}

function actualizarBarraCarrito() {
    const cant = cantidadCarrito();
    const total = totalCarrito();
    const elCant = document.getElementById('cart-cant');
    const elTotal = document.getElementById('cart-total');
    const barra = document.getElementById('barra-carrito');
    if (barra) barra.style.display = cant > 0 ? 'flex' : 'none';
    if (elCant) elCant.textContent = cant;
    if (elTotal) elTotal.textContent = fmt(total);
}

/* ---------- Pedidos ---------- */
function pedidosDefault() {
    return [
        { id: 1039, usuarioId: 1, hora: '6:50 p.m.', estado: 'entregado', tipoEntrega: 'recoger', metodoPago: 'efectivo', direccion: '', items: [{ nombre: 'Empanadas x3', cantidad: 2 }], total: 18000 },
        { id: 1041, usuarioId: 1, hora: '7:05 p.m.', estado: 'listo', tipoEntrega: 'domicilio', metodoPago: 'efectivo', direccion: 'Cra 45 #12-30, Itagüí', items: [{ nombre: 'Flan de café', cantidad: 1 }, { nombre: 'Papas criollas', cantidad: 1 }], total: 18000 },
        { id: 1042, usuarioId: 1, hora: '7:12 p.m.', estado: 'preparacion', tipoEntrega: 'domicilio', metodoPago: 'tarjeta', direccion: 'Cra 45 #12-30, Itagüí', items: [{ nombre: 'Antojito burger', cantidad: 1 }, { nombre: 'Arepa de choclo', cantidad: 1 }, { nombre: 'Papas criollas', cantidad: 1 }], total: 44400 },
        { id: 1043, usuarioId: 1, hora: '7:20 p.m.', estado: 'recibido', tipoEntrega: 'domicilio', metodoPago: 'efectivo', direccion: 'Cra 45 #12-30, Itagüí', items: [{ nombre: 'Empanadas x3', cantidad: 1 }, { nombre: 'Jugo de lulo', cantidad: 1 }], total: 19500 },
        { id: 1044, usuarioId: 1, hora: '7:22 p.m.', estado: 'recibido', tipoEntrega: 'recoger', metodoPago: 'efectivo', direccion: '', items: [{ nombre: 'Antojito burger', cantidad: 2 }], total: 39800 }
    ];
}

function getPedidos() {
    let p = JSON.parse(localStorage.getItem(LS_PEDIDOS) || 'null');
    if (!p) { p = pedidosDefault(); localStorage.setItem(LS_PEDIDOS, JSON.stringify(p)); }
    return p;
}
function savePedidos(p) { localStorage.setItem(LS_PEDIDOS, JSON.stringify(p)); }

function pedidosDelCliente() {
    const sesion = getSesion();
    if (!sesion || sesion.rol !== 'cliente') return [];
    return getPedidos().filter(p => p.usuarioId === sesion.id);
}

function avanzarEstado(id) {
    const pedidos = getPedidos();
    const pedido = pedidos.find(p => p.id === id);
    if (!pedido) return false;
    const i = ORDEN_ESTADOS.indexOf(pedido.estado);
    if (i >= 0 && i < ORDEN_ESTADOS.length - 1) {
        pedido.estado = ORDEN_ESTADOS[i + 1];
        savePedidos(pedidos);
        if (typeof renderKanban === 'function') renderKanban();
        return true;
    }
    return false;
}

function crearPedidoDesdeCarrito(costoDomicilio, datosEntrega = {}) {
    const sesion = getSesion();
    if (!sesion || sesion.rol !== 'cliente') return null;

    const carrito = getCarrito();
    if (!carrito.length) return null;

    // Validación final de disponibilidad antes de registrar el pedido.
    for (const item of carrito) {
        const prod = getProducto(item.productoId);
        if (!prod || !prod.disponible) return null;
        if (!Number.isInteger(item.cantidad) || item.cantidad < 1) return null;
    }

    const tipoEntrega = datosEntrega.tipoEntrega || 'domicilio';
    const direccion = String(datosEntrega.direccion || '').trim();
    if (tipoEntrega === 'domicilio' && direccion.length < 8) return null;

    const pedidos = getPedidos();
    const nuevoId = pedidos.length ? Math.max(...pedidos.map(p => p.id)) + 1 : 1001;
    const items = carrito.map(i => {
        const prod = getProducto(i.productoId);
        return {
            productoId: prod.id,
            nombre: prod.nombre,
            cantidad: i.cantidad,
            precioUnitario: i.precioUnit
        };
    });
    const subtotal = totalCarrito();
    const nuevo = {
        id: nuevoId,
        usuarioId: sesion.id,
        hora: new Date().toLocaleTimeString('es-CO', { hour: 'numeric', minute: '2-digit' }),
        fecha: new Date().toISOString(),
        estado: 'recibido',
        tipoEntrega,
        direccion: tipoEntrega === 'domicilio' ? direccion : '',
        metodoPago: datosEntrega.metodoPago || 'efectivo',
        items,
        subtotal,
        domicilio: Number(costoDomicilio) || 0,
        total: subtotal + (Number(costoDomicilio) || 0)
    };
    pedidos.push(nuevo);
    savePedidos(pedidos);
    saveCarrito([]);
    localStorage.setItem(LS_ULTIMO_PEDIDO, nuevoId);
    return nuevo;
}

function claseEstado(estado) {
    return 'estado-' + estado;
}
