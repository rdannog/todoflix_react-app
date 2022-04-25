import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Slides = styled(Slider)``

export const Card = styled.div``

export const Title = styled.h2`
    font-size:1.4vw;
`

export const Wrapper = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin-top:1.5vh;
    margin-bottom:1.5vh;
    width:90%;
`
export const Poster = styled.img`
    border-radius:8px;
    width:90%;
`
export const Description = styled.p`
    border-radius:8px;
    width:90%;
    font-size:0.9vw;
`
export const Stars = styled.div`
    display:flex;
    align-items:center;
    justify-content: start;

    p{
        margin-right:0.5vw;
        font-size:1vw;
    }

    `
    // .path{
    //     fill: ${ props => (props.thumb === null ? "white" : props.thumb < 3 ? "red" : props.thumb === 3 ? "yellow" : "green")}
    // }

