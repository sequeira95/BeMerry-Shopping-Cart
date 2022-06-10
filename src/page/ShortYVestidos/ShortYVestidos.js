import React, { useContext, useEffect, useState } from "react";
import  Productos  from "../../componentes/Productos/Productos";
import { DataContext } from "../../context/ContextProvider.js";
import styled from "styled-components";


export default function ShortYVestidos(){
    const value= useContext(DataContext)
        const [shorts, setShorts] = useState([])
        const [vestidos, setVestidos] = useState([])

        useEffect(()=>{
            const valores = value.productos.filter((e)=>e.tipo==="shorts")
            setShorts(valores)
            const valores2 = value.productos.filter((e)=>e.tipo==="vestidos")
            setVestidos(valores2)
        },[value])


    return (
        <>
        <Titulo>Shorts</Titulo>
        <ContenedorProductos>
            {shorts[0]?shorts.map((short)=>(
            <Productos
            key={short.id}
            id = {short.id}
            titulo = {short.titulo}
            precio = {short.precio}
            imagen ={short.imagen}
            tipo = {short.tipo}>
            </Productos>
            )):<h1>Sin Data</h1>}
        </ContenedorProductos>
        <Titulo>Vestidos</Titulo>
        <ContenedorProductos>
            {vestidos[0]?vestidos.map((vestido)=>(
            <Productos
            key={vestido.id}
            id = {vestido.id}
            titulo = {vestido.titulo}
            precio = {vestido.precio}
            imagen ={vestido.imagen}
            tipo = {vestido.tipo}>
            </Productos>
            )):<h1>Sin Data</h1>}
        </ContenedorProductos>

        </>
    )
}
const Titulo = styled.h1`
    font-size: 2rem;
    padding: 2rem 0 0 1rem;
    color: #bc8f8f;
`;

const ContenedorProductos = styled.div`
    padding: 5rem 1rem;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
    gap: 3rem 2rem;
    box-sizing: border-box;
`;