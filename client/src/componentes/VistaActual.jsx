import Catalogo from "../paginas/Catalogo";
import Carrito from "../paginas/Carrito";
import FormularioContacto from "../paginas/FormularioContacto";
import DetalleProducto from "../paginas/DetalleProducto";

function VistaActual({ 
    vista, 
    productoSeleccionado, 
    seleccionarProducto,
    cambiarVista,
    carrito,
    agregarAlCarrito,
    eliminarDelCarrito
}) {
    if (vista === 'catalogo' && !productoSeleccionado) {
        return <Catalogo verDetalle={(producto)=>{
            seleccionarProducto(producto);
            cambiarVista('detalle');    
        }} />
    }
    if (vista === 'detalle' && productoSeleccionado) {
        return <DetalleProducto
            producto={productoSeleccionado}
            volverAlCatalogo={()=>{
                seleccionarProducto(null);
                cambiarVista('catalogo');
            }}
            agregarAlCarrito={agregarAlCarrito}
        />
    }
    if (vista === 'carrito') {
        return <Carrito 
            productosCarrito={carrito}
            eliminarDelCarrito={eliminarDelCarrito}
        />
    }
    if (vista === 'contacto') { 
        return <FormularioContacto />
    }
    return <div><h2>Vista no encontrada</h2></div>
}       
export default VistaActual;