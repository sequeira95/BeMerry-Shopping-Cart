import React, {useEffect,useState,createContext} from "react";
import Data from '../dataProducto/Data.js'

export const DataContext = createContext()


export const DataPoducto = (props) =>{
    const [productos, setProductos] = useState([])
    const [menu, setMenu] = useState(false)
    const [carrito, setCarrito] = useState([])
    const [total, setTotal] = useState(0)

    useEffect(() =>{
        const producto = Data
        setProductos(producto.items)
    },[])


    const agregarCarrito = (id) =>{
        const carritoProducto = carrito.every(item =>(
			item.id !== id
			
        ))
		if(carritoProducto){
			const dataProducto = productos.filter(producto =>(
				producto.id === id
            ))
            const data = [...carrito, ...dataProducto]
			setCarrito(data)
            window.localStorage.setItem('dataCarrito', JSON.stringify(data))
            
		}else{
			alert("El producto ya existe dentro del carrito")
		}}

        useEffect(() =>{
            const dataCarrito = window.localStorage.getItem('dataCarrito')
            if(dataCarrito) {
                setCarrito(JSON.parse(dataCarrito))
            }else{
                window.localStorage.setItem('dataCarrito', JSON.stringify([]))
            }
            
        },[])


        useEffect(()=>{
            const sumaTotal = ()=>{
                const resultado = carrito.reduce((prev, item)=>(
                    prev +(item.precio * item.cantidad)
                ),0)
                setTotal(resultado)
            }
            sumaTotal()
        },[carrito])

    const value = {
        productos: productos,
        menu: [menu,setMenu],
        agregarCarrito : agregarCarrito,
        carrito: [carrito, setCarrito],
        total: [total, setTotal]
    }

    return(
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )
}