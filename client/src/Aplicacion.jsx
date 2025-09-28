import { useState } from 'react';
import BarraNavegacion from './componentes/BarraNavegacion';
import VistaActual from './componentes/VistaActual';
import PiePagina from './componentes/PiePagina';
import './estilos/catalogo.css';

function Aplicacion() {
  //estados globales
  const [carrito, actualizarCarrito] = useState([]);
  const [productoSeleccionado, seleccionarProducto] = useState(null);
  const [vista, cambiarVista] = useState('catalogo'); // 'catalogo', 'detalle', 'carrito', 'contacto'
  
  const agregarAlCarrito = (producto) => {
    actualizarCarrito([...carrito, producto]);
    seleccionarProducto(null);
    cambiarVista('catalogo');
  }

  const eliminarDelCarrito = (indice) => {
    const nuevoCarrito = [...carrito];
    nuevoCarrito.splice(indice, 1);
    actualizarCarrito(nuevoCarrito);
  }

  return(
    <div>
      <BarraNavegacion 
        cantidadCarrito={carrito.length} 
        cambiarVista={cambiarVista}
      />

      <VistaActual 
        vista={vista}
        productoSeleccionado={productoSeleccionado}
        seleccionarProducto={seleccionarProducto}
        cambiarVista={cambiarVista}
        carrito={carrito}
        agregarAlCarrito={agregarAlCarrito}
        eliminarDelCarrito={eliminarDelCarrito}
      />
      
      <PiePagina />
    </div>
  )
}
export default Aplicacion;