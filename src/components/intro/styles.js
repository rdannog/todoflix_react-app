import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
    color: white;
  }`

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 55vh;
    
    animation: 2s slide-right 1s forwards;
        transform:translateX(-120%);
        @keyframes slide-right {
            to {
              transform:translateX(0);
            }
        }
`
export const PosterWrapper = styled.div`
    margin-left: 6vw;
    
    img{
        width:28vw;
    }
`
export const TextBox = styled.div`
    display:flex;
    flex-direction: column;
    align-items: start;
    justify-content:space-around;
    margin-left:4.5vw;
    height: 55%;
   
    h3{
        font-size:1vw;
    }
    h2{
        font-size: 2vw;
    }
    p{
        width:40%;
        font-size: 0.85vw;
    }
`
export const Stars = styled.div`
    display:flex;
    align-items:center;
    justify-content: start;
    width:9%;
`
export const HeartIcon = styled.img`
    width: 1.3vw;
    cursor:pointer;
`