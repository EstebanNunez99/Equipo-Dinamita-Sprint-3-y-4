function Carrito({productosCarrito, eliminarDelCarrito}){
    const total = productosCarrito.reduce((suma, producto)=> suma + producto.precio, 0);
    return(
        <div style={{ padding: '1rem' }}>
            <h2>🛒Carrito de Compras</h2>
            {productosCarrito.length === 0 ? (
                <p>El carrito está vacío.</p>
            ) : (
                <div>
                    <ul>
                        {productosCarrito.map((producto, indice) => (
                            <li key={indice} style={{ marginBottom: '1rem' }}>
                            <strong>{producto.nombre}</strong> - ${producto.precio}
                            <button onClick={() => eliminarDelCarrito(indice)} style={{ marginLeft: '1rem' }}>Eliminar</button>
                            </li>
                        ))}
                    </ul>
                    <h3>Total: ${total}</h3>
                </div>
            )}
        </div>
    )    
}
export default Carrito;