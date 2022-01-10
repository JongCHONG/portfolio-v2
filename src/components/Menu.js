import React from 'react'
import styled from "styled-components"
import { Link } from 'react-router-dom'

const Logo = styled.i`
    font-size : 30px;
    cursor : pointer;
    transition : all ease 0.4s;
    &:hover {
        color : #81ecec;
    }
`

const Menu = () => {
  return (
    <div className='menu'>
      <ul>         
        <li><a href="#" data-text="Home"><Logo className="fas fa-home"></Logo></a></li>         
        <li><a href="#" data-text="Projets"><Logo className="fas fa-briefcase"></Logo></a></li>         
        <li><a href="#" data-text="Compétences"><Logo className="fas fa-user"></Logo></a></li>           
        <li><a href="#" data-text="Contact"><Logo className="fas fa-envelope"></Logo></a></li>     
      </ul> 
    </div>
  )
}

export default Menu