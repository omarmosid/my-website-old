import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const StyledNavbar = styled.nav`
  position: static;
  top: 0px;
  left: 0px;
  box-sizing: border-box;
  width: 100%;
  height: 60px;
  padding: 0px 30px;
  display: flex;
  align-items: center;
  background: transparent;
  a {
    text-decoration: none;
  }
  div.container__logo {
    flex: 10%;
    font-size: 24px;
    font-weight: bold;
  }
  div.container__menu {
    flex: 90%;
    display: flex;
    justify-content: flex-end;
    ul {
      margin: 0px;
      display: flex;
      li {
        margin: 0px;
        list-style: none;
        font-size: 16px;
        &:not(:last-child) {
          margin-right: 20px;
        }
      }
    }
  }
`

const Navbar = (props) => {
  return (
    <StyledNavbar>
      <div className="container__logo">
        <Link to="/">
          Omar
        </Link>
      </div>
      <div className="container__menu">
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </StyledNavbar>
  )
}

Navbar.defaultProps = {

}

export default Navbar