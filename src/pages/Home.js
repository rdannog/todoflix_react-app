import React from "react";
import Data from "../db.json"
import Intro from "../components/intro/intro";
import Slide from "../components/slide/slide";
import styled, {createGlobalStyle} from "styled-components";
import SearchIcon from "../components/header/img/searchicon.png"
import { Link } from "react-router-dom";


const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    color: white;
    box-sizing: border-box;
    list-style: none;
    font-family: 'Roboto', sans-serif;
  }

  body{
    background-color: black;
    ::-webkit-scrollbar {
      width: 15px;
    }
    
    ::-webkit-scrollbar-track {
      background: #000; 
      border-radius:10px;
    }
     
    ::-webkit-scrollbar-thumb {
      background: #333; 
      border-radius:10px;
    }
    
    ::-webkit-scrollbar-thumb:hover {
      background: #555; 
    }
  }

  a, button{
    text-decoration:none;
    cursor:pointer;
  }
`
const Input = styled.input`
  position:absolute;
  left:58vw;
  top:3.8vh;
  width:30vw;
  padding:1.5vh 3.2vw;
  border:transparent;
  border-radius:5px;
  outline:none;
  font-size:0.9vw;
  opacity:1;
  background-color:#2C2C2C;
  background-image: url(${SearchIcon});
  background-size: 2.2vh;
  background-repeat: no-repeat;
  background-position: 1.2vw center;
  
  &::placeholder {
      color: white;
    }
`

export default class Home extends React.Component{
  
  render(){
    return(
      <div>
        <GlobalStyle/>
        <Link to="/todos">
          <Input type="text" placeholder="Pesquisar" />
        </Link>
        <Intro/>
        <Slide/>
      </div>
    )
  }
}