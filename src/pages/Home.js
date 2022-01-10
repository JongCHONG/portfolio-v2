import React from 'react'
import { Link } from 'react-router-dom'

import styled from "styled-components"

const About = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  margin: 35% auto;
`
const Title = styled.div`
  margin: 20px;
  font-size: xx-large;
  font-weight: 100;
  font-style: italic;
`
const Content = styled.p`
  width: 80%;
  line-height: 1.5;
  padding: 10px;
  font-weight: 100;
  background-color: rgba(163, 163, 163, 0.5);
`

const Home = () => {
  return (
    <div>
      <Link to="/">test</Link>
      <About>
        <Title>
          A propos de moi
        </Title>
        <Content>
          Passionné par la réalisation et le développement de projets web, j'ai eu mon BTS Informatique de gestion Option développeur qui m'a permis d'acquérir les bases de programmation.
          Je suis actuellement en formation Développeur Web et web mobile (RNCP niveau 5) afin de me spécialiser et j’aimerais intégrer une 
          entreprise dynamique pour mon stage de fin de formation. 
        </Content>
      </About>
    </div>
  )
}

export default Home