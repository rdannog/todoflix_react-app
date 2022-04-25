import React from "react";
import "../../App.css"
import * as S from "./styles"
import Favorite from "./img/heartIcon.svg"

export default class Intro extends React.Component {
    state = {
        filmes: [
            {
                id: 1,
                title: "The Rocky Horror Picture Show",
                descricao: "Os namorados Brad e Janet têm um pneu furado durante uma tempestade e descobrem a misteriosa mansão do louco cientista Dr. Frank-N-Furter, que revela sua mais recente criação: um homem musculoso chamado Rocky.",
                poster: "https://sonhandoatravesdepalavras.com.br/wp-content/uploads/2016/10/rocky-horror-poster.jpg",
                isVistoRecentemente: true,
                isFavorito: true,
                isAssistido: true,
                stars: 5
            }
        ]
    }
    favoritar = () => {
        this.setState({
            isFavorito: !this.state.isFavorito
        })
    }
    render() {
        return (
            <S.Container>
                <S.GlobalStyle />
                <S.PosterWrapper>
                    <img src={this.state.filmes[0].poster} alt="" />
                </S.PosterWrapper>
                <S.TextBox>
                    {this.state.filmes.map(item => (
                        <>
                            <div className="tooltip">
                                <S.HeartIcon 
                                onClick={this.favoritar} 
                                style = {this.state.isFavorito === false?{filter:"brightness(0.5)"}:{filter: "drop-shadow(1px 1px 10px rgba(255,255,255,0.5))"}} 
                                src={Favorite} 
                                alt="" />
                                <span className="tooltiptext">{this.state.isFavorito === false? "Favoritar" : "Favoritado"}</span>
                            </div>
                            <h3>{item.isVistoRecentemente === true ? "Visto Recentemente" : "Na sua lista"}</h3>
                            <h2>{item.title}</h2>
                            <p>{item.descricao}</p>
                            <S.Stars>
                                <p>{item.stars}/5</p>
                                <svg  xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17">
                                    <rect id="Box" width="17" height="17" />
                                    <path id="Path_1994" data-name="Path 1994" d="M97-8.286h2.805v-8.229H97Zm15.429-7.543a1.391,1.391,0,0,0-1.4-1.371H106.6l.666-3.134.021-.219a1.021,1.021,0,0,0-.309-.727l-.743-.72-4.615,4.519a1.326,1.326,0,0,0-.414.967v6.857a1.391,1.391,0,0,0,1.4,1.371h6.312a1.394,1.394,0,0,0,1.29-.837l2.118-4.834a1.328,1.328,0,0,0,.1-.5v-1.31l-.007-.007Z" transform="translate(-96.143 23.714)" fill="white" 
                                    style={item.stars < 3 ? { fill: "red" } : item.stars === 3 ? { fill: "yellow"}: item.stars>3 ? {fill:"green"}:{fill:"white"}}
                                     />
                                </svg>
                            </S.Stars>
                        </>
                    ))}
                </S.TextBox>
            </S.Container>
        )
    }
}