import React from "react";
import Intro from "../components/intro/intro";
import Slide from "../components/slide/slide";
import {createGlobalStyle} from "styled-components";
import Header from "../components/header/header";

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