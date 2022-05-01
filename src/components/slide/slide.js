import React, { Component } from "react";
import "../../App.css"
import * as S from "./styles"
import {api} from "../../services/api"

import Favorite from "../intro/img/heartIcon.svg"


export default class Slide extends Component {
    state = {
        allMovies: []
      }
      async componentDidMount() {  
        this.getAllMovies()
      }
      getAllMovies = async () => {
        const response = await api.get('/destaques')
        const allMoviesList = response.data.map((item) => {
          return {...item,}}
        )
      
        this.setState({
          allMovies:allMoviesList
        })
      }
    
    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            speed: 500,
            autoplaySpeed: 2500,
            cssEase: "linear"
        };
        return (
            <div style={{ marginLeft: "6vw", marginRight: "3vw" }}>
                <h2 style={{ marginBottom: "4vh" }}> Destaques</h2>
                <S.Slides {...settings}>
                    {this.state.allMovies.map(item => (
                        <S.Card>
                            <S.ImageContainer>
                                <S.HeartIcon
                                    style={item.isFavorito === false ? { filter: "brightness(0.3)" } : { filter: "drop-shadow(1px 1px 10px rgba(255,255,255,0.8))" }}
                                    src={Favorite}
                                    alt="" />
                                <S.Poster src={item.poster} alt="" />
                            </S.ImageContainer>
                            <S.Wrapper>
                                <S.Title>{item.title}</S.Title>
                                <S.Stars>
                                    <p>{item.stars === null ? "-" : item.stars + "/5"}</p>
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
                                </S.Stars>
                            </S.Wrapper>
                            <S.Description>{item.descricao}</S.Description>
                        </S.Card>
                    ))}

                </S.Slides>
            </div>
        );
    }
}