function DetalleProducto({ producto, volverAlCatalogo, agregarAlCarrito }) {
  return (
    <div style={{ padding: '1rem' }}>
      <h2>{producto.nombre}</h2>
      <img src={producto.imagen} alt={producto.nombre} style={{ width: '300px', borderRadius: '8px' }} />
      <p>{producto.descripcion}</p>
      <p><strong>Precio: ${producto.precio}</strong></p>
      <button onClick={() => agregarAlCarrito(producto)}>Añadir al carrito</button>
      <button onClick={volverAlCatalogo} style={{ marginLeft: '1rem' }}>Volver al catálogo</button>
    </div>
  );
}

export default DetalleProducto;
