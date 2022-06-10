import React, { useContext } from "react";
import {CarruselComponent,Slide} from "../../componentes/carrusel/carrusel";
import './PrincipalPage.css'
import carrusel1 from '../../imagenesData/carrusel1.png'
import carrusel2 from '../../imagenesData/carrusel2.png'
import carrusel3 from '../../imagenesData/carrusel3.png'
import carrusel4 from '../../imagenesData/carrusel4.png'

import { DataContext } from "../../context/ContextProvider";
import Productos from "../../componentes/Productos/Productos";
import styled from "styled-components";


export default function PrincipalPage(){

    const value = useContext(DataContext)
    const productos = value.productos
    let item = 0



    return(
        <>
        <main>
        <CarruselComponent controles ={true}>
            <Slide>
                <img src={carrusel1} alt="carrusel1"/>
            </Slide>
            <Slide>
                <img src={carrusel4} alt="carrusel4"/>
            </Slide>
            <Slide>
                <img src={carrusel2} alt="carrusel2"/>
            </Slide>
            <Slide>
                <img src={carrusel3} alt="carrusel3"/>
            </Slide>
        </CarruselComponent>
        </main>
        <Titulo>Productos</Titulo>
        <div>
        <ProductoPaginaPrincipal>
        {productos.sort((a,b)=>Math.random()>0.5? 1 : -1).map((producto) => {
                    if((item < 15)){
                        item++
                        return<>
                        <Productos
                        key={producto.id}
                        id = {producto.id}
                        titulo = {producto.titulo}
                        precio = {producto.precio}
                        imagen ={producto.imagen}
                        tipo = {producto.tipo}
                        />
                        </>}else {
                            return <></>
                            
                        }
                    })}
        </ProductoPaginaPrincipal>
        </div>
        </>
    )
}
const Titulo = styled.h2`
    font-size: 2rem;
    padding: 0 0 0 1rem;
    color: #bc8f8f;
`;
const ProductoPaginaPrincipal = styled.div`
//padding: 2rem 0 0 1.5rem;
margin: 0 auto;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
gap: 2rem 1rem;
box-sizing: border-box;
padding: 0 20px;

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
a{
    text-decoration: none;
}

.contendedorPrincipal{
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
    height: 100%;
    background: none;
    //margin-right: 20px;
    width: 100%;
}
.boton{
    pointer-events: none;
    cursor: default;
    display: none;
}
.contenedorInformacion{
    margin-left: 0;
}


`