import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import styled from 'styled-components';
import LogoPrincipal from '../../imagenesData/LogoPrincipal.png'
import { FaOpencart } from "react-icons/fa";
import { DataContext } from "../../context/ContextProvider";

function NavBar (){
const value = useContext(DataContext)
const [menu, setMenu] =value.menu
const [carrito] =value.carrito

const cerrarMenu = () =>{
    setMenu(!menu)
}

    const[clicked, setClicked] = useState(false)
    const handleClick = () =>{
        const body = document.body
        body.style.overflow = !clicked ? "hidden": "auto"
        setClicked(!clicked)
    }
    const closeBoton = () =>{
        setClicked(false)
    }
    useEffect(()=>{
        
            const body = document.body
            body.style.overflow = clicked ? "hidden": "auto"    
        
    },[clicked])


    return (
        <>
        <ContenedorNav>
            <Link to='/'>
                <div className="logo">
                    <img src={LogoPrincipal} alt="logo" width="60"></img>
                </div>
            </Link>
            <div className= {`link ${clicked ? "active":" "}`}>
                <Link onClick={clicked? closeBoton :""} to="/">Inicio</Link>
                <Link onClick={clicked? closeBoton :""} to="/tops">Tops</Link>
                <Link onClick={clicked? closeBoton :""} to="/conjuntos">Conjuntos</Link>
                <Link onClick={clicked? closeBoton :""} to="/franelas">Franelas</Link>
                <Link onClick={clicked? closeBoton :""} to="/shortYvestidos">Shorts y Vestidos</Link>
            </div>
            <div className= "linkCarrito" onClick={cerrarMenu} >
                <Link onClick={closeBoton} to="#"><FaOpencart className="icon"/>
                <span className="totalItems">{carrito.length}</span></Link>
            </div>
            <div className="burger">
                <BurgerMenu clicked={clicked} handleClick={handleClick}  />
            </div>
            <BgDiv className={`initial ${clicked ? "active" : ""}`}></BgDiv>
        </ContenedorNav>
        
        </>
    )
}
export default React.memo(NavBar)

const ContenedorNav = styled.nav`
padding: .4rem;
background-color: rgba(249, 154, 232, 0.20);
display: flex;
align-items: center;
justify-content: space-between;
a{
    color: black;
    text-decoration: none;
    margin-right: 1rem;
}
.link{
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .5s ease;
    z-index: 2;
    a{
        color: black;
        font-size: 2rem;
        display: block;
    }

    
    @media(min-width: 768px){
        position: initial;
        margin: auto;
        a{
        font-size: 1rem;
        color: black;
        display: inline;
        }
    display: block;
    }
    }
.icon{
    width: 1.5rem;
    height: 1.3rem;
    position: relative;
    
}
.linkCarrito{
    position: fixed;
    top: 89%;
    left: 90%;
    border-radius: 100px ;
    padding: 15px 15px 0 15px;
    background: #f17db2;
    span{
        position: absolute;
        top: 0;
        width: 4rem;
        height: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        color: black;
        padding: 0.8rem;
        font-size: 1rem;
        font-weight: 500;
    }
    @media(max-width: 700px){
        left: 82%;

    }
    @media(max-width: 390px){
        left: 79%;
        span{
            width: 1rem;
            padding-bottom: 5px;
        }
    }
    @media(max-width: 305px){
        left: 74%;
        padding: 15px 8px 0 10px;

        span{
            width: 1rem;
            padding-bottom: 5px;
        }
    }


}
.link.active{
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 10%;
    left: 0;
    right: 0;
    text-align: center;

    
    @media(max-width: 768px){
        :nth-of-type(2){
            top:80%
        }
    }

    a{
        font-size: 2rem;
        margin-top: 1rem;
        color: black;
    }
}
.burger{
    z-index: 2;
    @media(min-width: 768px){
        display: none;
    }
}
`

const BgDiv = styled.div`
background-color: rgba(244, 205, 247, 0.29);
position: absolute;
top: -100%;
left: -1000px;
width: 100%;
height: 100%;
z-index: 1;
transition: all .5s ease ;



&.active{
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(10px);

}
`
