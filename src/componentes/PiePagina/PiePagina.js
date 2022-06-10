import React from "react";
import styled from 'styled-components';
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import logo from '../../imagenesData/logoPiePagina.png'
export default function PiePagina(){



    return (
    <>
    <PiePagina1 className="piePagina1">
        <PiePAgina2 className="piePagina2">
            <PiePagina3 className="piePagina3">
                <div className="redes">
                <p className="redesSociales">
                    Redes Sociales
                </p>
                {/* <RiFacebookCircleLine className="logoFacebook"/> */}
                <a href="https://www.instagram.com/be.merry.ve/">
                <BsInstagram className="logoInstagram"/>
                </a>
                </div>
                <div>
                <p className="contacto">Contacto</p>
                <a href="http://wa.me/+584120665011">
                <BsWhatsapp className="logoWS"/>
                </a>
                </div>
                <div className="logo">
                    <img src={logo} alt=""/>
                </div>
            </PiePagina3>
        </PiePAgina2>
    </PiePagina1>
    </>
    )
}

const PiePagina1= styled.footer`
margin-top: 150px;
position: relative;
`

const PiePAgina2 = styled.div`
    background: #f17db2;
    padding: 20px;
    position: absolute;
    left: 0;
    bottom: 0;
    height: 80px;
    width: 100%;
    color: white;
    @media(max-width: 800px){
        height: 110px;
    }


    /* p{
    text-align: right;
    padding-right: 50px;
    font-weight: 600;
    font-size: 1.5rem;
}  */
`
const PiePagina3 = styled.div`

.redesSociales{
    position:absolute;
    font-weight: 600;
    font-size: 1rem;
    left: 86%;
    color: #3e3030;
    bottom: 61%;


} 
.contacto{
    position:absolute;
    font-weight: 600;
    font-size: 1rem;
    left: 4%;
    color: #3e3030;
    bottom: 61%;

}
.logoInstagram{
    position: absolute;
    left: 89%;
    font-size: 2rem;
    margin-top: 4px;
    top: 40%;

} 
.logoFacebook{
    position: absolute;
    left: 88%;
    font-size: 2.3rem;
    margin-top: 1px;
    top: 40%;
    color: #403939;
} 
.logoWS{
    position: absolute;
    left: 5.5%;
    font-size: 2rem;
    margin-top: 4px;
    top: 35%;
} 

a{
    text-decoration: none;
    color: #403939;
}
img{
    width: 100px;
    position: absolute;
    left: 45%;
    height: auto;
}

@media(max-width: 871px){
.redesSociales{
    font-size: 0.9rem;
}
.contacto{
    font-size: 0.9rem;
}
.logoFacebook{
    font-size: 2rem;
}
.logoInstagram{
    font-size: 1.8rem;
    margin-left: 10px;
}
.logoWS{
    font-size: 1.8rem;
}
}
@media(max-width: 800px){
.redesSociales{
    left: 78%;
}
.logoFacebook{
    left: 78%;
}
.logoInstagram{
    left: 83%;
}
.contacto{
    left: 10%
}
.logoWS{
    left: 12.5%;
    margin-top: 10px;
}
}
@media(max-width: 495px){
    .logoInstagram{
        left: 80%;
    }
    img{
    width: 100px;
    position: absolute;
    left: 42%;
    }

}
`
