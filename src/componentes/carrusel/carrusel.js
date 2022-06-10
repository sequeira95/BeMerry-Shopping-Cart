import React, { useCallback, useEffect, useRef } from "react";
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";
import styled from 'styled-components'




function CarruselComponent({
    children,
    controles = true,
    autoPlay = true,
    velocidad = "1000",
    intervalo = "5000"
}){
    const slide = useRef(null)
    
    const siguiente = useCallback(()=>{
        if(slide.current.children.length >[0]){
            //comprobamos que el slide tenga elementos
            const primerElemento = slide.current.children[0]
    
            //establecemos la transicion para el slide
            slide.current.style.transition = `${velocidad}ms ease-out all`
            //saber el tamaño de la imagen para poder moverla
            const tamañoSlide = slide.current.children[0].offsetWidth
    
            //movemos el slide
            slide.current.style.transform = `translateX(-${tamañoSlide}px)`
            const transicion = () =>{
            //ponemos queno tenga transsition despues de que pase laimagen para queno 
            //se note cuando se devuelve
            slide.current.style.transition = 'none'
            //aqui se devolvereia al arreglo cero
            slide.current.style.transform = `translateX(0)`
            //tomamos el primer elemento y lo enviamos al final del arreglo
            slide.current.appendChild(primerElemento)
            //eliminamos el evento despues de que termina animacion
            slide.current.removeEventListener('transitionend', transicion)
        }
        //eventListener para cuando ser termina la animacion
        slide.current.addEventListener('transitionend', transicion)
    
    }},[velocidad])

    

    const anterior = () =>{
        if(slide.current.children.length >[0]){
            //agregamos un idex para que de manera dinamica se tome el ultimo elemento
            const index = slide.current.children.length - 1
            //seleccionamos el ultimo elemento
            const ultimoElemento = slide.current.children[index]
            //insertamos el ultimo elemento antes del primero
            slide.current.insertBefore(ultimoElemento, slide.current.firstChild)
            slide.current.style.transition ="none"

            const tamañoSlide = slide.current.children[0].offsetWidth
            slide.current.style.transform = `translateX(-${tamañoSlide}px)`
            //le colocamos un setTimeOut para decirle que despues
            //de cierto tiempo ejecute la funcion
            setTimeout(() =>{
                slide.current.style.transition =`${velocidad}ms ease-out all`
                slide.current.style.transform = `translateX(0)`

            },30)


        }
    }
    //agregamos un useEffect para que cada vez que cargue 
    //el carrusel se vuelva a renderizar
    useEffect(() =>{
        if(autoPlay){
        //logramos que cada 3s se de siguiente y solo cuando este en esa pagina
        //esto es una opcion pero queremos que cuando tenga un click 
        //se detenga la animacion y cuando el mouse salga
        //la animacion continue
        let intervaloTime = setInterval(() => {
            siguiente()
        },intervalo)
        //eliminamos los intervalos
        
        slide.current.addEventListener('mouseenter', () =>{
            clearInterval(intervaloTime)
        });
        // Volvemos a poner el intervalo cuando saquen el cursor del slideshow
        slide.current.addEventListener('mouseleave', () =>{
            intervaloTime = setInterval(() => {
                siguiente()
            },intervalo)
        })
        return  ()=>clearInterval(intervaloTime)
    }
    },[autoPlay, intervalo, siguiente])
        

    

    return(
        <PrincipalContariner>
            <ContenedorSlide ref={slide}>
                {children}
            </ContenedorSlide>
            {controles && <Controles>
                <Boton className="controlIzquierdo" onClick={anterior}>
                    <RiArrowLeftSLine className="iconoIzquierdo"/>
                </Boton>
                <Boton className="controlDerecho" onClick={siguiente} derecho>
                    <RiArrowRightSLine className="iconoDerecho"/>
                </Boton>
            </Controles>}
        </PrincipalContariner>
    )
}

const PrincipalContariner = styled.div`
position: relative;
display: grid;
place-items: center;
overflow: hidden;
`
const ContenedorSlide = styled.div `
    display: flex;
    flex-wrap: nowrap;
`
const Slide = styled.div`
min-width: 100%;
overflow: hidden;
transition: .3s ease all;
z-index: 0;
//max-height: 500px;//se puede quitar es opcional
position: relative;
display: grid;
place-items: center;
img{
    width: 80%;
    height: 80%;
    //width: 100%;
    vertical-align: top;
}

`
const Controles = styled.div`
position: absolute;
top: 10%;
z-index: 0;
width: 80%;
height: 80%;
pointer-events: none;
`

const Boton = styled.div`
pointer-events: all;
background: none;
border: none;
cursor: pointer;
outline: none;
width: 25px;
height: 100%;
text-align: center;
position: absolute;
transition: .3s ease all;
display: grid;
place-items: center;
font-size: 3vw;
//opcional
&:hover {
    background: rgb(176,169,177,0.38);

}

path{
    filter: ${props => props.derecho ? 'drop-shadow(-2px 0px 0px #fff)' : 'drop-shadow(2px 0px 0px #fff)' };
}

${props => props.derecho ? 'right: 0' : 'left: 0'}
`

export  {CarruselComponent,Slide}