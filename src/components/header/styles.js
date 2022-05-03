import SearchIcon from "./img/searchicon.png"
import styled from "styled-components";


export const Container = styled.div`
  height:13vh;
  display:flex;
  align-items:center;
  justify-content:space-between;
  font-size: 1vw;
`
export const MenuWrapper = styled.div`
  height:100%;
  display:flex;
  align-items:center;
  font-size: 1vw;
    
`
export const Title = styled.h1`
  margin:0 3.5vw 0 6vw;
  font-family: 'Bebas Neue', cursive;
  font-weight: 400;
  font-size: 2.5vw;
  letter-spacing: 1.32px;
  color: #E71B27;
  text-shadow: 3px 3px 10px rgba(100, 100, 100, 0.7);
  cursor:pointer;
`
export const SearchWrapper = styled.div`
  display:flex;
  align-items:center;
  justify-content: space-between;
  height:100%;
  width:52%;
  font-size: 1vw;
`
export const AddButton = styled.button`
  padding:1.5vh 1.4vw;
  font-size:0.8vw;
  font-weight:600;
  background-color:#E71B27;
  border-radius: 5px;
  border:none;
`
export const Input = styled.input`
  visibility:hidden;
  padding:1.5vh 3.2vw;
  border:transparent;
  border-radius:5px;
  outline:none;
  width:55%;
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
export const CloseButton = styled.button`
  font-size:2vw;
  font-weight:900;
  background-color:transparent;
  outline:none;
  border:none;
  transform: rotate(45deg)
`
export const CloseButtonBox = styled.div`
  display:flex;
  justify-content: flex-end;
  align-items:start;
`
export const ModalTitle = styled.h1`
 
  margin-left:1.5vw;
  font-weight:400;
`