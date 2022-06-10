import React,{useContext, useEffect, useState} from "react";
import styled from "styled-components";
import imagen from '../../imagenesData/infoBeMerry.png'
import { CarruselComponent,Slide } from "../../componentes/carrusel/carrusel";
import { DataContext } from "../../context/ContextProvider";
import { useParams } from "react-router-dom";
import Productos from "../../componentes/Productos/Productos";
import { AiOutlineCheck } from "react-icons/ai";


export default function DetalleProducto (){
    const value = useContext(DataContext)
    const productos = value.productos
    const parametros = useParams()
    const [detalle, setDetalle] = useState([])
    const [carrito] = value.carrito
    const agregarCarrito = value.agregarCarrito
    const añadido = carrito.some(agregar => agregar.id ===detalle.id)
    const [clase,texto] = añadido ? [ "btnAñadido" , <AiOutlineCheck/>] :[ "btn" , "Añadir al carrito" ]

    let item = 0
    useEffect(() =>{
        productos.forEach(producto =>{
            if(producto.id===parseInt(parametros.id)){
                setDetalle(producto)
            }
        })
    },[productos, parametros.id])




    return (
        <>
        <ContenedorProductos>
            <ContendeodrProducto>
                <CarruselComponent autoPlay= {false}>
                    <Slide>
                        <div >
                        <img src={detalle.imagen} alt=""/>
                        </div>
                    </Slide>
                    <Slide>
                        <div >
                        <img src={imagen} alt=""/>
                        </div>
                    </Slide>
                </CarruselComponent>
                    <ProductoInformacion>
                        <h1>{detalle.titulo}</h1>
                        <p>{detalle.tipo}</p>
                        <p className="price">${detalle.precio}</p>
                    </ProductoInformacion>
                    <div className="boton">
                        <button className={clase} onClick={()=>agregarCarrito(detalle.id)} >{texto}</button>
                    </div>
                    </ContendeodrProducto>
            </ContenedorProductos>
            <Titulo>Tambien te puede interesar</Titulo>
            <div>
                <ProductoAleatorios>
                {productos.sort((a,b)=>Math.random()>0.5? 1 : -1).map((detalle) => {
                    if((item < 6)){
                        item++
                        return<>
                        <Productos
                        key={detalle.id}
                        id = {detalle.id}
                        titulo = {detalle.titulo}
                        precio = {detalle.precio}
                        imagen ={detalle.imagen}
                        tipo = {detalle.tipo}
                        />
                        </>}else {
                            return<>
                            </>
                        }
                    })}
                </ProductoAleatorios>
            </div>
            
        </>
    );
    }
    const Titulo = styled.h2`
    font-size: 2rem;
    padding: 5rem 0 0 1rem;
    color: #bc8f8f;
`;

    const ProductoAleatorios = styled.div`
    padding: 0 20px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
    gap: 2rem 1rem;
    box-sizing: border-box;
    button{
        visibility:hidden;
    }
    img{
        width: 150px;
    }
    .contenedor{
    text-align: start;
    background: #fff;
}
    .contendedorPrincipal{
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
    height: 100%;
    width: 100%;
    background: none;
}
.boton{
    pointer-events: none;
    cursor: default;
    display: none;
}
    
    `
    const ContenedorProductos = styled.div`
        background: white;
        margin: 40px 10% 0 10% ;
        display: grid;
        gap: 3rem 2rem;
        box-sizing: border-box;
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
            width: 22vw;
            margin-top: 20px;
            margin-left: 15px;
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
            max-width: 30vw;
            width: 100%;
            margin: 0 auto;
            font-size: 1rem;
            color: white;
            font-weight: 500;
            &:active{
                background: #322d32;
            }
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
            font-size: 1.4rem;
            color: #19191ac9;
        }
        p{
            font-weight: 700;
            color: rgba(0,0,0,0.555);
            text-transform: uppercase;
            font-size: 1rem;
        }
        .price{
            font-size: 1.5rem;
            color: #4e344e
        }
    @media(max-width: 450px){
        h1{
            font-size: 1rem;
        }
        p{
            font-size: .8rem;
        }
    }
    `
