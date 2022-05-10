//Libs
import React from "react";
import Modal from "react-modal";
import { api } from "../../services/api"
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
    boxState: false,
    title: [],
    descricao: [],
    poster: [Placeholder],
    isAdicionado: [],
    isAssistido: false,
    stars: 0

  }
  addFilm = () => {
    api.post('/allMovies', {
      title: this.state.title,
      poster: this.state.poster,
      descricao: this.state.descricao,
      isAdicionado: true,
      isFavorito: false,
      isAssistido: this.state.isAssistido,
      stars: this.state.stars
    })
    this.setState({
      boxState: !this.state.boxState,
    }, window.location.reload()
    )
  }
  getTitle = (e) => {
    this.setState({
      title: e.target.value
    })
  }
  getDescricao = (e) => {
    this.setState({
      descricao: e.target.value
    })
  }
  getPoster = (e) => {
    this.setState({
      poster: e.target.value
    })
  }
  getRating = (starRate) => {
    this.setState({
      stars: starRate
    })
  };
  trueRadio = (value) => {
    this.setState({
      isAssistido: value.target.checked
    })
  }
  falseRadio = (value) => {
    this.setState({
      isAssistido: value.target.checked
    })
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
                  <input type="text" name="title" style={{ height: "4vh", padding: "10px" }} onChange={this.getTitle} required />

                  <label>
                    Descrição
                  </label>
                  <textarea name="description" style={{ height: "8vh", padding: "10px" }} onChange={this.getDescricao} required></textarea>

                </div>
                <div className="image-box">
                  <img src={this.state.poster} alt="" />
                  <label>
                    Imagem de capa
                  </label>
                  <input type="text" placeholder="Cole aqui a url da imagem" onChange={this.getPoster} required />

                </div>
              </div>

              <div className="status">
                <h3>Status</h3>
                <div>
                  <label>
                    <input onChange={this.trueRadio} type="radio" name="status" value="true" required />
                    Já assisti </label>
                  <label>
                    <input onChange={this.falseRadio} type="radio" name="status" value="false" required />
                    Ainda não assisti </label>
                </div>
              </div>
              <div>
                <h3>
                  Nota
                  <ReactStars {...info} onChange={this.getRating} />
                </h3>
              </div>
              <div className="button">
                <S.AddButton onClick={this.handleModal} style={{ backgroundColor: "transparent" }}>Cancelar</S.AddButton>
                <S.AddButton onClick={this.addFilm}>Confirmar</S.AddButton>
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

