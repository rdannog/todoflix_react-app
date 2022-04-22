import React, { Component } from "react";
import "../../App.css"
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slides = styled(Slider)`
    
    
`
const Stars = styled.div`
    display:flex;
    align-items:center;
    justify-content: start;
    width:3vw;
    svg{
        margin-left:0.5vw;
    }
`
const Card = styled.div`

`
const Title = styled.h2`
    font-size:1.2vw;
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
`
export default class Slide extends Component {
    state = {
        filmes: [
            // {
            //     id: 2,
            //     title: "The Rocky Horror Picture Show",
            //     descricao: "Os namorados Brad e Janet têm um pneu furado durante uma tempestade e descobrem a misteriosa mansão do louco cientista Dr. Frank-N-Furter.",
            //     poster: "https://sonhandoatravesdepalavras.com.br/wp-content/uploads/2016/10/rocky-horror-poster.jpg",
            //     isVistoRecentemente: false,
            //     isFavorito: true,
            //     isAssistido: true,
            //     stars: 3
            // },
            {
                id: 3,
                title: "Metal Lords",
                descricao: "Cansados de serem os excluídos, Hunter e Kevin decidem formar uma banda de heavy metal para vencer o festival da escola e conquistar a admiração de todos.",
                poster: "https://www.ageratingjuju.com/wp-content/uploads/2022/03/Metal-Lords-Wallpapers-and-Images.jpg",
                isVistoRecentemente: true,
                isFavorito: true,
                isAssistido: true,
                stars: 5
            },
            {
                id: 4,
                title: "Medida Provisória",
                descricao: "Em um futuro próximo distópico no Brasil, um governo autoritário ordena que todos os cidadãos afrodescendentes se mudem para a África.",
                poster: "https://i.ytimg.com/vi/pOjf8oj23k0/mqdefault.jpg",
                isVistoRecentemente: false,
                isFavorito: false,
                isAssistido: false,
                stars: null
            },
            {
                id: 6,
                title: "A Vida Invisível",
                descricao: "No Rio de Janeiro dos anos 1950, Guida e Eurídice são cruelmente separadas, impedidas de viver os sonhos que alimentaram juntas ainda adolescentes. ",
                poster: "http://cineclubecauim.ong.br/wp/wp-content/uploads/2020/03/a-vida-invisivel-800x445.jpg",
                isVistoRecentemente: false,
                isFavorito: false,
                isAssistido: false,
                stars: null
            }, {
                id: 7,
                title: "AmarElo",
                descricao: "Nos bastidores do show no Theatro Municipal de São Paulo, o rapper e ativista Emicida celebra o grande legado da cultura negra brasileira. ",
                poster: "https://assets.whatsnewonnetflix.com/external_assets/sggkh+%5B%5Blxx*9*44*43_8_muochl_mvg%5Bwmn%5Bzkr%5Be3%5BC805vQhtDYWV7zJyzMwnXCTFK*B%5BZZZZYH6l8OGw2VxLGPtngZM3dJUhNOOpzQy5RM2%5DnqVMTN1PdE0WILvQki3b7MUcvEVq16z1YQc8mRV7gQrITMW1aXBwVXwIt*1oPLWxCsYnoImZhDNT2SemTflrf02W.jpg",
                isVistoRecentemente: true,
                isFavorito: true,
                isAssistido: true,
                stars: 5
            }, {
                id: 8,
                title: "Vende-se Esta Casa",
                descricao: "Logan e sua mãe estão tentando se recuperar após a morte do pai da família. Para isso, eles se mudam temporariamente para uma casa desocupada de parentes.",
                poster: "https://3.bp.blogspot.com/-W37elNuXbbw/Wm3U-RwmPZI/AAAAAAAACXo/GB15Sf18ayk2aJ4sOekKdHPdwqkXIeGnwCLcBGAs/s640/d95e12462a0948d182735e57398490ead3535206.jpg",
                isVistoRecentemente: true,
                isFavorito: true,
                isAssistido: true,
                stars: 1
            }, {
                id: 9,
                title: "1984",
                descricao: "Winston Smith é um funcionário público cuja função é reescrever a história de forma a colocar os líderes de um país fictício sob uma luz positiva. ",
                poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSycywi0zUAmt6H70An0or3rIKHg0EuDWROPw&usqp=CAU",
                isVistoRecentemente: true,
                isFavorito: true,
                isAssistido: true,
                stars: 5
            },
            // {
            //     id: 1,
            //     title: "Que Horas Ela Volta?",
            //     descricao: "Val é a fiel empregada domestica de uma família rica. Mas a chegada de sua filha gera tensão na casa e faz com que ela comece a questionar esse papel.",
            //     poster: "https://i.pinimg.com/originals/0c/94/d6/0c94d6c1f1fa0528dc3b7e22df6562c0.jpg",
            //     isVistoRecentemente: true,
            //     isFavorito: true,
            //     isAssistido: true,
            //     stars: 4
            // }
        ]
    }

    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: true,
            speed: 500,
            autoplaySpeed: 2500,
            cssEase: "linear"
        };
        return (
            <div style={{ marginLeft: "6vw", marginRight: "3vw" }}>
                <h2 style={{ marginBottom: "4vh" }}> Destaques</h2>
                <Slides {...settings}>
                    {this.state.filmes.map(item => (
                        <Card>
                            <Poster src={item.poster} alt="" />
                            <Wrapper>
                                <Title>{item.title}</Title>
                                <Stars>
                                    <p>{item.stars === null ? "-" : item.stars}/5</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17">
                                        <rect id="Box" width="17" height="17" />
                                        <path id="Path_1994" data-name="Path 1994" d="M97-8.286h2.805v-8.229H97Zm15.429-7.543a1.391,1.391,0,0,0-1.4-1.371H106.6l.666-3.134.021-.219a1.021,1.021,0,0,0-.309-.727l-.743-.72-4.615,4.519a1.326,1.326,0,0,0-.414.967v6.857a1.391,1.391,0,0,0,1.4,1.371h6.312a1.394,1.394,0,0,0,1.29-.837l2.118-4.834a1.328,1.328,0,0,0,.1-.5v-1.31l-.007-.007Z" transform="translate(-96.143 23.714)" fill="white" style={item.stars < 3 ? { fill: "red" } : { fill: "green" }}
                                        />
                                    </svg>
                                </Stars>
                            </Wrapper>
                            <Description>{item.descricao}</Description>
                        </Card>
                    ))}

                </Slides>
            </div>
        );
    }
}