function BarraNavegacion({ cantidadCarrito, cambiarVista }) {
  return (
    <nav style={{ backgroundColor: '#333', color: 'white', padding: '1rem' }}>
      <h2>Mueblería Hermanos Jota</h2>
      <p>🛒 Carrito: {cantidadCarrito} productos</p>
      <div style={{ marginTop: '0.5rem' }}>
        <button onClick={()=>cambiarVista('catalogo')}> Catalogo </button>
        <button onClick={()=>cambiarVista('carrito')}> Ver Carrito </button>
        <button onClick={()=>cambiarVista('contacto')}> Contacto </button>
      </div>
    </nav>
  );
}

export default BarraNavegacion;
