//Libs
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Modal from "react-modal";
import ReactStars from "react-rating-stars-component";
//Images
import SearchIcon from "./searchicon.png"
import Placeholder from "./placeholder.png"
//Components
import Profile from "./profile";
import Menu from "./dropdownMenu";


const Container = styled.div`
  height:13vh;
  display:flex;
  align-items:center;
  justify-content:space-between;
  font-size: 1vw;
`
const MenuWrapper = styled.div`
  height:100%;
  display:flex;
  align-items:center;
  font-size: 1vw;
    
`
const Title = styled.h1`
  margin:0 3.5vw 0 6vw;
  font-family: 'Bebas Neue', cursive;
  font-weight: 400;
  font-size: 2.5vw;
  letter-spacing: 1.32px;
  color: #E71B27;
  text-shadow: 3px 3px 10px rgba(100, 100, 100, 0.7);
  cursor:pointer;
`
const SearchWrapper = styled.div`
  height:100%;
  width:52%;
  display:flex;
  align-items:center;
  justify-content: space-between;
  font-size: 1vw;
`
const AddButton = styled.button`
  padding:1.5vh 1.4vw;
  font-size:0.8vw;
  font-weight:600;
  background-color:#E71B27;
  border-radius: 5px;
  border:none;
`
const Input = styled.input`
  width:55%;
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
const CloseButton = styled.button`
  font-size:1.2vw;.
  font-weight:900;
  background-color:transparent;
  outline:none;
  border:none;
`
const CloseButtonBox = styled.div`
  display:flex;
  justify-content: flex-end;
  align-items:start;
`
const ModalTitle = styled.h1`
  margin-top:2vh;
  margin-left:1.5vw;
  font-weight:400;
`
const info = {
  isHalf: true,
  size: 30,
  count: 5,
  a11y: true
};

export default class Header extends React.Component {
  state = {
    boxState: false
  }
  
  handleModal = () => {
    this.setState({
      boxState: !this.state.boxState
    })
  }
  render() {
    return (
        <Container>
        <MenuWrapper>
          <Link to="/"><Title>todoflix</Title></Link>
          <Menu />
        </MenuWrapper>
        <SearchWrapper>
          <AddButton onClick={this.handleModal}>Adicionar Filme</AddButton>
          <Modal
            role={"dialog"}
            shouldFocusAfterRender={true}
            className="Modal"
            onRequestClose={this.handleModal}
            isOpen={this.state.boxState}
          >
            <CloseButtonBox>
              <CloseButton onClick={this.handleModal}>X</CloseButton>
            </CloseButtonBox>
            <ModalTitle>Adicionar Filme</ModalTitle>
            <div className="container">
              <div className="input-container">
                <div className="input-box">
                  <label>
                    Nome
                  </label>
                  <input type="text" name="nome" id="nome" style={{height:"4vh"}}/>

                  <label>
                    Descrição
                  </label>
                  <textarea name="comentarios" id="comentarios" style={{height:"8vh"}}></textarea>

                </div>
                <div>
                  <label>
                    Imagem de capa
                  </label>
                  <img src={Placeholder} alt="" style={{filter: "brightness(0.6)"}}/>
                  <input type="file" name="arquivo" id="arquivo" />
                  
                </div>
              </div>

              <div>
                <h3>Status</h3>
                <input type="radio" name="status" value="Já assisti" />
                <label> Já assisti </label>
                <input type="radio" name="status" value="Ainda não assisti" />
                <label> Ainda não assisti </label>
              </div>
              <div>
                <h3>
                  Nota
                  <ReactStars {...info} />
                </h3>
              </div>
              <div>
                <AddButton style={{backgroundColor:"transparent"}}>Cancelar</AddButton>
                <AddButton>Confirmar</AddButton>
              </div>
            </div>
          </Modal>
          <Input type="text" placeholder="Pesquisar" />
          <Profile />
        </SearchWrapper>
      </Container>
    )
  }
}

