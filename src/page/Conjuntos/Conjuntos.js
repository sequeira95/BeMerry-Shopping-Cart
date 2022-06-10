import React, { useContext, useEffect, useState } from "react";
import  Productos  from "../../componentes/Productos/Productos";
import { DataContext } from "../../context/ContextProvider.js";
import styled from "styled-components";


export default function Conjuntos (){
    const value = useContext(DataContext)
        const [productos, setProductos] = useState([])
        useEffect(()=>{
            const valores = value.productos.filter((e)=>e.tipo === "conjuntos")
            setProductos(valores)
        },[value])



    return (
        <>
        <Titulo>Conjuntos</Titulo>
        <ContenedorProductos>
            {productos[0]?productos.map((conjunto)=>(
            <Productos
            key={conjunto.id}
            id = {conjunto.id}
            titulo = {conjunto.titulo}
            precio = {conjunto.precio}
            imagen ={conjunto.imagen}
            tipo = {conjunto.tipo}>
            </Productos>
            ))
            :<h1>Sindata</h1>
}
        </ContenedorProductos>
        
        </>
    )
}
const Titulo = styled.h1`
    font-size: 2rem;
    padding: 5rem 0 0 1rem;
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