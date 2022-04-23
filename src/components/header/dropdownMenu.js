import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


const DropDownContainer = styled.div`
  margin-left: 2vw; 
  width:10vw;
`;

const DropDownHeader = styled.div`
  padding:0.5vh 1vw;
  word-spacing:0.8vw;
  cursor:pointer;
`;

const DropDownListContainer = styled.div`
  position: absolute;
  z-index: 1;
  width: 8vw;
`;

const DropDownList = styled.ul`
  width:100%;
  padding: 1vh 1vw;
  font-size: 0.5vh 1vw;
  color: #3faffa;
  background-color:black;
    
`;

const ListItem = styled.li`
  margin-bottom:0.9vw;
  cursor: pointer;
  &:hover {
      text-decoration:underline white;
  }
`;


export default class Menu extends React.Component {
    state={
      isOpen:false,
      selectedOption: null,
      headMenu:"Categorias"
    }
  

  toggling = () => {
    this.setState({
        isOpen:!this.state.isOpen
    });}

  onOptionClicked = value => () => {
      this.setState({
          isOpen:false,
          selectedOption: value
      })
  };
  category = () => {
    this.setState({
      selectedOption: null
    })
  }
  render(){
    return (
      <>
      <Link onClick={this.category} to="/">Início</Link>
        <DropDownContainer>
            <DropDownHeader onClick={this.toggling}>
              {this.state.selectedOption || this.state.headMenu} &#9663;
            </DropDownHeader>
            {this.state.isOpen && (
              <DropDownListContainer>
                <DropDownList>
                    <ListItem onClick={this.onOptionClicked("Todos")} >
                      <Link to="/todos">Todos</Link>
                    </ListItem>
                    <ListItem onClick={this.onOptionClicked("Favoritos")} >
                      <Link to="/favoritos">Favoritos</Link>
                    </ListItem>
                    <ListItem onClick={this.onOptionClicked("Já Vistos")} >
                      <Link to="/vistos">Já Vistos</Link>
                    </ListItem>
                </DropDownList>
              </DropDownListContainer>
            )}
          </DropDownContainer>
          </>
      );
  }
}
