import React, { useContext,useState,useEffect } from "react";
import { AiOutlineClose,AiOutlinePlus,AiOutlineMinus } from "react-icons/ai";
import './Carritos.css'
import { DataContext } from "../../context/ContextProvider";




function CarritoShop(){

    const value = useContext(DataContext)
    const [menu, setMenu] = value.menu
    const [carrito,setCarrito] = value.carrito
    const [total] =value.total
    const [texto, setTexto] = useState("")
    
    const cerrarMenu = () =>{
        setMenu(false)
    }
    const mostrar = menu ? "carritos mostrar" :"carritos"
    const mostrar2 = menu ? "carrito mostrar" :"carrito"
    const mostrar3 = menu ? "sombra mostrar"  :"sombra"

    // window.addEventListener('click',mostrar=>(mostrar = menu ? "carritos mostrar" :"carritos"))
    // window.addEventListener('click',mostrar2=>(mostrar2 = menu ? "carritos mostrar" :"carritos"))
    // function e () {document.getElementById('mostrarClick')
    //             .addEventListener('click', cerrarMenu)}
    
    const restar = id =>{
        carrito.forEach(item =>{
            if(item.id === id){
                item.cantidad === 1 ? item.cantidad =1
                :item.cantidad -=1
                window.localStorage.setItem('dataCarrito',JSON.stringify(carrito))
            }
            setCarrito([...carrito])
        })
    }
    const sumar = id =>{
        carrito.forEach(item =>{
            if(item.id === id){
                item.cantidad += 1
                window.localStorage.setItem('dataCarrito',JSON.stringify(carrito))
            }
            setCarrito([...carrito])
        })
    }
    const eliminarProducto  = id =>{
            carrito.forEach((item, index) => {
            if(item.id === id){
                item.cantidad = 1
                carrito.splice(index, 1)
                window.localStorage.setItem('dataCarrito',JSON.stringify(carrito))
            }
        });
        setCarrito([...carrito])
    }
    const limpiarCarrito = () =>{
        window.localStorage.removeItem('dataCarrito')
    }
    
    useEffect(()=>{

        let enviarTexto= ""
        for(let datoCarrito of carrito){
            enviarTexto += encodeURIComponent(` 
    * Titulo: ${datoCarrito.titulo},
    * Precio: $${datoCarrito.precio},
    * Cantidad: ${datoCarrito.cantidad}.
    `)


        }
        setTexto(enviarTexto)
    },[carrito])

    return(
        <>
        <div className={mostrar} >
        <div className={mostrar3} onClick={cerrarMenu}></div>

            <div className={mostrar2}>
                <div className="carrito_cerrar" onClick={cerrarMenu}>
                    <AiOutlineClose className="cerrar"/>
                </div>
                <h2 className="carritoTitulo">Su carrito</h2>
                <div className="carritoCenter">
                    {
                    carrito.length === 0 ?
                    <h2 className="carritoVacio"> Su carrito se encuentra vacio</h2>:
                    carrito.map((producto)=>(
                    <div className="carrito_items" key={(producto.id)}>
                        <img src={producto.imagen} alt=""/>
                        <div className="carritoItems">
                            <h3>{producto.titulo}</h3>
                            <p className="precio">${producto.precio}</p>
                        </div>
                        <div className="botones">
                        <AiOutlinePlus className="sumar" onClick={() => sumar(producto.id)}/>
                        <p className="cantidad">{producto.cantidad}</p>
                        <AiOutlineMinus className="restar" onClick={() => restar(producto.id)}/>
                        </div>
                    <div className="eliminarItems" onClick={()=> eliminarProducto(producto.id)}>
                        <AiOutlineClose className="borrar"/>
                    </div>
                    </div>
                    ))}       
                </div>
                <div className="totales">
                    <h3>Total: ${total}</h3>
                    <button className="btn" onClick={limpiarCarrito}>
                        <a className="a" href={`http://wa.me/+584120665011?text=%20Hola.%20Me%20gustaria%20tener%20informacion%20sobre:%0A${texto}`}
                        >Pagar</a></button>
                </div>
                
            </div>
        </div>
        </>
    )
}
export default React.memo(CarritoShop)

