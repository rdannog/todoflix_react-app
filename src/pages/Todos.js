import React from "react";
import Data from "../db.json"
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
  }

  a, button{
    text-decoration:none;
    cursor:pointer;
  }
`

export default class Todos extends React.Component{
  render(){
    return(
      <div>
        <GlobalStyle/>
        {Data.map(post =>(
          <div>
            <p>{post.title}</p>
            <img src={post.poster} alt=""/>
          </div>
        ))}
      </div>
    )
  }
}