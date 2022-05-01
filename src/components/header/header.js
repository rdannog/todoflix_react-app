//Libs
import React from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
//Components
import * as S from "./styles"
import Profile from "./profileMenu";
import Menu from "./dropdownMenu";
//Images
import Placeholder from "./img/placeholder.png"


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
    const info = {
      isHalf: true,
      size: 30,
      count: 5,
      a11y: true
    };
    return (
      <S.Container>
        <S.MenuWrapper>
          <Link to="/"><S.Title>todoflix</S.Title></Link>
          <Menu />
        </S.MenuWrapper>
        <S.SearchWrapper>
          <S.AddButton onClick={this.handleModal}>Adicionar Filme</S.AddButton>
          <Modal
            role={"dialog"}
            shouldFocusAfterRender={true}
            className="Modal"
            onRequestClose={this.handleModal}
            isOpen={this.state.boxState}
          >
            <S.CloseButtonBox>
              <S.CloseButton onClick={this.handleModal}>+</S.CloseButton>
            </S.CloseButtonBox>
            <S.ModalTitle>Adicionar Filme</S.ModalTitle>
            <div className="container">
              <div className="input-container">
                <div className="input-box">
                  <label>
                    Nome
                  </label>
                  <input type="text" name="nome" id="nome" style={{ height: "4vh" }} />

                  <label>
                    Descrição
                  </label>
                  <textarea name="comentarios" id="comentarios" style={{ height: "8vh" }}></textarea>

                </div>
                <div className="image-box">
                  <img src={Placeholder} alt="" style={{ filter: "brightness(0.6)" }} />
                  <label>
                    Imagem de capa
                  </label>
                  <input type="text" placeholder="Cole aqui a url da imagem"/>

                </div>
              </div>

              <div className="status">
                <h3>Status</h3>
                <label>
                <input type="radio" name="status" value="Já assisti" />
                 Já assisti </label>
                <label>
                <input type="radio" name="status" value="Ainda não assisti" />
                 Ainda não assisti </label>
              </div>
              <div>
                <h3>
                  Nota
                  <ReactStars {...info} />
                </h3>
              </div>
              <div className="button">
                <S.AddButton onClick={this.handleModal} style={{ backgroundColor: "transparent" }}>Cancelar</S.AddButton>
                <S.AddButton>Confirmar</S.AddButton>
              </div>
            </div>
          </Modal>
          <S.Input type="text" placeholder="Pesquisar" />
          <Profile />
        </S.SearchWrapper>
      </S.Container>
    )
  }
}

