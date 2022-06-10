import React, { useContext } from "react";
import styled from "styled-components";
import { DataContext } from "../../context/ContextProvider";
import { Link } from "react-router-dom";
import { AiOutlineCheck } from "react-icons/ai";


export default function Productos({
    id,
    imagen,
    titulo,
    tipo,
    precio,
}) {

    const value = useContext(DataContext)
    const agregarCarrito = value.agregarCarrito
    const [carrito] = value.carrito

    const añadido = carrito.some(agregar => agregar.id ===id)
    const [clase,texto] = añadido ? [ "btnAñadido" , <AiOutlineCheck/>] :[ "btn" , "Añadir al carrito" ]
    return (
    <>
    <ContenedorProductos className="contendedorPrincipal">
        <ContendeodrProducto className="contenedor">
                <Link className="linkDetalle" to={`/detalle/${id}`}>
                <img src={imagen} alt={titulo}/>
                </Link>
            <ProductoInformacion className="contenedorInformacion">
                <h1>{titulo}</h1>
                <p>{tipo}</p>
                <p className="price">${precio}</p>
            </ProductoInformacion>
            <div className="boton">
                <button className={clase} onClick={() => agregarCarrito(id)}>
                    <span>
                    {texto}
                    </span>
                    </button>
            </div>
            </ContendeodrProducto>
        </ContenedorProductos>
    </>
);
}



const ContenedorProductos = styled.div`
    background: white;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
    gap: 3rem 2rem;
    box-sizing: border-box;
    width: 100%;
`;

const ContendeodrProducto = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    box-shadow: 1px 10px 10px 2px rgb(185, 115, 221 ,20%);
    border: 6px solid transparent;
    border-radius: 5px;
    justify-content: space-between;
    &:hover{
        border: 6px solid #e5aef333;
    }
    img{
        width: 200px;
    }
    .boton{
        width: 100%;
        height: 45px;
        display: grid;
        //grid-template-columns: 2fr 1fr;
        //gap: 1rem 2rem;
        margin: 1rem;
    }
    .btn{
        border: none;
        outline: 0;
        cursor: pointer;
        border-radius: 5px;
        &:active {
            background: #322d32;
        }
    }
    .btnAñadido{
        background: #17c163;
        border: none;
        outline: 0;
        border-radius: 5px;
        font-size: 2rem;
        pointer-events: none;
        cursor: default;
        transition: .5s;
    }
    
    button{
        background: #867e87;//#00adff63;
        max-width: 250px;
        width: 100%;
        margin: 0 auto;
        font-size: 1rem;
        color: white;
        font-weight: 600;

    }
    //eliminar lo mas seguro
    /* a.btn{
        background: gray;
        display: grid;
        align-items: center;
        margin-left: -2rem;
        border-radius: 5px;
        color: white;
        text-align: center;
        font-weight: 700;
        text-decoration: none;
        &:hover{
            color: white;
        }
    } */

`
const ProductoInformacion = styled.div`
    padding: 1rem;
    h1{
        font-weight: 600;
        font-size: 1rem;
        color: #19191ac9;
    }
    p{
        font-weight: 700;
        color: rgba(0,0,0,0.555);
        text-transform: uppercase;
        font-size: 0.7rem;
    }
    .price{
        font-size: 1.5rem;
        color: #4e344e
    }
`


