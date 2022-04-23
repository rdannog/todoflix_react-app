import React from "react";
import Intro from "../components/intro/intro";
import Slide from "../components/slide/slide";
import {createGlobalStyle} from "styled-components";

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

export default class Home extends React.Component{
  render(){
    return(
      <div>
        <GlobalStyle/>
        <Intro/>
        <Slide/>
      </div>
    )
  }
}