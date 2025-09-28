import TarjetaProducto from "../componentes/TarjetaProducto";
import productos from "../datos/productos";
import '../estilos/catalogo.css';

function Catalogo({verDetalle}) {
    return (
        <div>
            <h2>Catalogo de productos</h2>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                {productos.map(producto => (
                    <TarjetaProducto 
                        key={producto.id}
                        producto={producto}
                        verDetalle={verDetalle}
                    />  
                ))}
            </div>
        </div>
    )
}
export default Catalogo;