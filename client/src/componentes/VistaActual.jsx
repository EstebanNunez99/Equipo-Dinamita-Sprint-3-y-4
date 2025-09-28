import Catalogo from "../paginas/Catalogo";
import Carrito from "../paginas/Carrito";
import FormularioContacto from "../paginas/FormularioContacto";
import DetalleProducto from "../paginas/DetalleProducto";
import Home from "../paginas/Home";

function VistaActual({ 
    vista, 
    productoSeleccionado, 
    seleccionarProducto,
    cambiarVista,
    carrito,
    agregarAlCarrito,
    eliminarDelCarrito
}) {

    if (vista === 'home') {
        return <Home cambiarVista={cambiarVista} />
    }

    if (vista === 'catalogo') {
        return (
            <Catalogo verDetalle={(producto)=>{
            seleccionarProducto(producto);
            cambiarVista('detalle');   
        }} />
        ) 
    }
    if (vista === 'detalle') {
        if (!productoSeleccionado) {
            cambiarVista('catalogo');
            return null;
        }
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
    return null
}       
export default VistaActual;