import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import "./App.css"
import styled from "styled-components"
import backgroundImage from "./images/business-2717063_1920.jpg"

import Home from './pages/Home'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Menu from './components/Menu'

const Background = styled.div`
  height: 100%;
  font-family: 'Raleway';
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(${backgroundImage});
`
const Container = styled.div`
  display: flex;
`
const Right = styled.div`
  width: 50%;
  background-color: rgba(0, 0, 0, 0.1);
  min-height: 100vh;
  color: white;
`
const Left = styled.div`
  min-height: 100vh;
  width: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
`
const Name = styled.h1`
  position: absolute;
  margin: 20px;
  font-weight: 300;
  font-size: 25px;
`
const Logo = styled.div`
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  align-content: center;
  display: flex;
  margin: auto;
  text-align: center;
  font-weight: 300;
`

const App = () => {
  return (
    <div>
      <Background>
        <Container>
          <Left>
            <Name>
               CHONG Jong Hoa
            </Name>
            <Logo>
              <img src="./images/logoJong3.png" alt="cjh" />
              Recherche de stage en Développeur Full Stack
            </Logo>
          </Left>
          <Menu />
          <Right>
            <BrowserRouter>
              <Routes>
                <Route exact path="/" element={<Home />}/>
                <Route path="/projects" element={<Projects />}/>
                <Route path="/skills" element={<Skills />}/>
                <Route path="/contact" element={<Contact />}/>
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </Right>
        </Container>
      </Background>
    </div>
  )
}

export default App;
