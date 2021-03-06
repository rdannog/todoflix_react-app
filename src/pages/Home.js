import React from "react";
import {api} from "../services/api"
import Intro from "../components/intro/intro";
import Slide from "../components/slide/slide";
import styled, { createGlobalStyle } from "styled-components";
import SearchIcon from "../components/header/img/searchicon.png"


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
const Container = styled.div`
  display:flex;
  flex-wrap:wrap;
  justify-content:space-evenly;
  margin:0 3vw;
  width:90%;
`
const AllTitle = styled.h1`
  margin:4vh 0 6vh 6vw;
  font-size:1.6vw;
  font-weight:100;
`
const Card = styled.div`
  width:18vw;
  margin-bottom:5vh;
`
const Poster = styled.img`
  width:100%;
  border-radius:8px;
`
const Wrapper = styled.div`
  margin:1.5vh 0;
  display:flex;
  align-items:center;
  justify-content:space-between;
`

const Title = styled.h2`
  font-size:1.2vw;
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
const Description = styled.p`
  width:100%;
  font-size:0.9vw;
  text-align:justify;
`



export default class Home extends React.Component {
  state = {
    allMovies: [],
    filteredMovies: []
  }
  
  async componentDidMount() {  
    this.getAllMovies()
  }
  getAllMovies = async () => {
    const response = await api.get('/allMovies')
    console.log(response.data)
    
    const allMoviesList = response.data.map((item) => {
      return {...item,}}
    )
  
    this.setState({
      allMovies:allMoviesList
    })
  }

  handleSearch = (e) => {
    const { allMovies } = this.state;
    
    const clear = () => {
      return(
        <>
          <Intro />
          <Slide />
        </>
      )
    }

    
    if (e.target.value.lenght > 1) {
      this.setState({
        filteredMovies: clear()
      })
    }

    const search = allMovies.filter((item) => {
      if (item.title.toLowerCase().includes(e.target.value.toLowerCase())) {
        return true
      }
    })

    this.setState({
      filteredMovies: search
    })
  }

  render() {
    return (
      <>
        <GlobalStyle />
        <Input onChange={this.handleSearch} type="text" placeholder="Pesquisar" />
        {this.state.filteredMovies.length !== 1 ?
          <>
            <Intro />
            <Slide />
          </> : (
            <>
              <AllTitle>Destaques</AllTitle>
              <Container>
                {this.state.filteredMovies.map((item) => (
                  <Card >
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
      </>
    )
  }
}