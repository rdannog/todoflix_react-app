import React from "react";
import Data from "../db.json"
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const Container = styled.div`
   display:flex;
   flex-wrap:wrap;
   align-items:center;
   justify-content: space-evenly;
`
const Stars = styled.div`
    display:flex;
    align-items:center;
    justify-content: start;
    p{
        font-size:1vw;
        margin-right:0.5vw;
    }
`
const Card = styled.div`
    width:20vw;
`
const Title = styled.h2`
    font-size:1.4vw;
`
const Wrapper = styled.div`
margin-top:1.5vh;
margin-bottom:1.5vh;
width:90%;
display:flex;
align-items:center;
justify-content:space-between;
`
const Poster = styled.img`
    width:90%;
    border-radius:8px;
`
const Description = styled.p`
    width:90%;
    border-radius:8px;
    font-size:0.9vw;
`
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

export default class Todos extends React.Component {
  render() {
    return (
      <>
      <GlobalStyle />
      <h2 style={{ margin: "4vh 6vw" }}> Todos os filmes</h2>
      <Container>
          {Data.map(item => (
            <Card>
              <Poster src={item.poster} alt="" />
              <Wrapper>
                <Title>{item.title}</Title>
                <Stars>
                  <p>{item.stars === null ? "-" : item.stars}/5</p>
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17">
                    <rect id="Box" width="17" height="17" />
                    <path id="Path_1994" data-name="Path 1994" d="M97-8.286h2.805v-8.229H97Zm15.429-7.543a1.391,1.391,0,0,0-1.4-1.371H106.6l.666-3.134.021-.219a1.021,1.021,0,0,0-.309-.727l-.743-.72-4.615,4.519a1.326,1.326,0,0,0-.414.967v6.857a1.391,1.391,0,0,0,1.4,1.371h6.312a1.394,1.394,0,0,0,1.29-.837l2.118-4.834a1.328,1.328,0,0,0,.1-.5v-1.31l-.007-.007Z" transform="translate(-96.143 23.714)" style=
                      {item.stars === null ?
                        { fill: "white" } :
                        item.stars < 3 ?
                          { fill: "red" } :
                          item.stars === 3 ?
                            { fill: "yellow" } :
                            { fill: "green" }
                      }
                    />
                  </svg>
                </Stars>
              </Wrapper>
              <Description>{item.descricao}</Description>
            </Card>
          ))}
      </Container>
      </>
    )
  }
}