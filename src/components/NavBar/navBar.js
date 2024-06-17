import React, { useState } from "react"
import styled from "styled-components"
import Lupaa from "../filmes/image.png"

const NavContainer = styled.nav`
    display: flex;
    height: 15vh;
    justify-content: space-around;
    align-items: center;
    background-color: #000000;

    .Lupaaa{
        width: 40px;
    }

    .box{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`
const NavList = styled.ul`
    width: 65%;
    display: flex;
    justify-content: space-around;
    `
const NavItem = styled.li`
   
    list-style: none;
    font-size: 1.3rem;
    color: #f2f2f2;

`
const Input = styled.input`
     width: 80%;
     height: 4vh;
     display: ${props => props.open};

`

export default function NavComponent (){

    const [Lupa, setLupa] = useState("flex")
    function openLupa(){
        if (Lupa == "flex"){
            setLupa("none")
        }
        else{
            setLupa("flex")
        }
    }
    return(
        <NavContainer>
            <NavList>
                <NavItem>Comédia</NavItem>
                <NavItem>Ficção</NavItem>
                <NavItem>Drama</NavItem>
                <NavItem>Terror</NavItem>
                <NavItem>Suspense</NavItem>
                <NavItem>Ação</NavItem>
            </NavList>
            <div className="box">
            <Input open={Lupa} placeholder="Pesquise o seu filme"/>
            <img src={Lupaa} className="Lupaaa" onClick={openLupa}/>
            </div>
        </NavContainer>
    )
}

// const SearchInput = () =>{
//     return <Input />
// }