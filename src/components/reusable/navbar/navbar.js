import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import useScrollPosition from '../../hooks/useScrollPosition'

const StyledNavbar = styled.nav`
  position: fixed;
  z-index: 100;
  top: 0px;
  left: 0px;
  box-sizing: border-box;
  width: 100%;
  height: 60px;
  padding: 0px 30px;
  display: flex;
  align-items: center;
  background: ${props => props.isScrolled ? '#fff' : 'transparent'};
  box-shadow: ${props => props.isScrolled ? '0px 2px 6px rgba(0, 0, 0, 0.25)' : 'transparent'};
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
  const [isScrolled, setScrollStatus] = useState(false);
  useScrollPosition(({ prevPos, currPos }) => {
    if(currPos.y < 0) {
      setScrollStatus(true);
    } else if(currPos.y >= 0) {
      setScrollStatus(false);
    }
  });
  return (
    <StyledNavbar isScrolled={isScrolled}>
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