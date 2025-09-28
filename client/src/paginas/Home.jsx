function Home({ cambiarVista }){
    return(
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <h1>Bienvenido a Mueblería Hermanos Jota</h1>
            <p>Descubrí el arte de vivir con nuestros muebles exclusivos.</p>
            <img src="../assets/imagenes/Mesa Comedor Pampa.png" alt="" />
            <button onClick={() => cambiarVista('catalogo')}>Ver Catálogo</button>
        </div>
    )

}
export default Home;