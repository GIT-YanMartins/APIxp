import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content:center;
    align-items:center;
    position:fixed;
    background-color: rgba(108, 122, 137 / 1) ;
    backdrop-filter: blur(15px);
    width:100%;
    height:12vh;
    z-index: 1;
`
export const Nav = styled.nav`
    width: 80%;
`
export const Ul = styled.ul`
    display: flex;
    justify-content: space-around;
    align-items:center;
    width: 100%;
    li{
        list-style: none;
        
    }

    a{
        text-decoration:none;
        color:white;
        font-size:1.2rem;
    }
`


export const Container = styled.section`
    background-color: tomato;
    display:flex;
    align-items:center;
    justify-content:space-evenly;
    flex-wrap:wrap;
    color:white;

   
`
export const Name = styled.h2`
    color: white;
`
export const Sinopse = styled.h2`
    color: white;
    text-align: justify;
`
export const BoxTitle = styled.div`
    width: 50%;
    height:40%;
    color:white;
    display:flex;
    flex-direction: column;
    justify-content:space-between;
    align-items:center;
    background-color: rgba(108, 122, 137 / 1) ;
    backdrop-filter: blur(15px);
    
    h2{
        font-size:1.2rem
    }

    img{
        width:10px;
        cursor:pointer;
    }
`

export const Caixa = styled.input`
    display:${props => props.show };
    border-radius:30px;

`


export const BoxFilms = styled.section`
    width:22%;

    img{
        width:80%;
    }
`




export const ContainerMain = styled.section`
    background-image: url(${props => props.background});
    background-size:100% 100%;
    background-repeat:no-repeat;
    height:100vh;
    display:flex;
    align-items: end;
    justify-content: center;


`

