import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Icon from "./Group 32.svg"



const DropDownContainer = styled.div`
  width:10vw;
  background-color:black;
`;

const DropDownHeader = styled.div`
    display:flex;
    align-items:center;
    justify-content: space-evenly;
    width:5vw;
    margin-right:5vw;
    cursor:pointer;
    img{
        width:2.3vw;
    }
    cursor:pointer;
`;

const DropDownListContainer = styled.div`
    position: absolute;
    z-index: 1;
    width: 10vw;
    right:2vw;
`;

const DropDownList = styled.ul`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
    width:100%;
    height:20vh;
    padding: 1vw;
    font-size: 0.5vh 1vw;
    color: #3faffa;
    
`;

const ListItem = styled.li`
    display:flex;
    align-items:center;
    justify-content:start;
    width:100%;
    padding:5px;
    text-align:center;
    cursor: pointer;
    &:hover {
        border:0.05px solid white;
        img{
            filter: brightness(1);
        }
        p {
            color:white;
        }
    }
    p{
        margin-left: 1vw;
        color:gray;
        
    }
    img{
        filter: brightness(0.7);
    }
`;


export default class Profile extends React.Component {
    state={
        isOpen:false
    }
  

  toggling = () => {
    this.setState({
        isOpen:!this.state.isOpen
    });}

  render(){
    return (
      <>
        <DropDownContainer>
            <DropDownHeader onClick={this.toggling}>
                <img src={Icon} alt="" />
                <p>&#9663;</p>
            </DropDownHeader>
            {this.state.isOpen && (
              <DropDownListContainer>
                <DropDownList>
                    <ListItem>
                        <img src={Icon} alt="" />
                        <p>Dan</p>
                    </ListItem>
                    <ListItem>
                        <img src={Icon} alt="" />
                        <p>Fernando</p>
                    </ListItem>
                    <ListItem>
                        <img src={Icon} alt="" />
                        <p>Marlon</p>
                    </ListItem>
                </DropDownList>
              </DropDownListContainer>
            )}
          </DropDownContainer>
          </>
      );
  }
}
