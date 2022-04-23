import React from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import "./App.css"
import Todos from "./pages/Todos";
import Vistos from "./pages/Vistos";
import Favoritos from "./pages/Favoritos";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="/favoritos" element={<Favoritos />} />
          <Route path="/vistos" element={<Vistos />} />
        </Routes>
      </Router>
    )
  }
}