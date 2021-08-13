import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { RiGameFill } from 'react-icons/ri';

import { navLinks } from '../constants/navLinks';
import { mixins } from '../helpers';

const NavBar = styled.nav`
  ${mixins.flexBetween};
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  height: 60px;
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 11;
  /* padding: 0 50px; */
  backdrop-filter: blur(10px);
  transition: var(--transition);

  .logo {
    ${mixins.flexCenter};
    margin-left: 20px;
    padding-left: 10px;
    text-decoration: none;
    color: var(--color-text-two);
    /* font-family: var(--font-bangers); */

    span {
      font-weight: bolder;
      font-style: italic;
      font-size: 18px;
    }
  }

  ul {
    ${mixins.flexBetween};
    margin-right: 30px;
    padding-right: 20px;
    list-style: none;
    z-index: 12;

    li {
      margin: 0 5px;
      position: relative;

      .items {
        color: var(--color-text-four);
        font-weight: bolder;
        text-decoration: none;
        padding: 10px;

        &:hover {
          color: var(--hover-text-button);
        }
      }
    }
  }
`;

const Navbar = () => {
  return (
    <>
      <NavBar>
        <Link to="/" className="logo"><RiGameFill size={40} color="#fbC02d" /><span>. . . . PleiGames</span></Link>

        <ul>
          {navLinks && navLinks.map(({ url, name }, i) => (
            <li key={i}>
              <Link to={url} className="items">{name}</Link>
            </li>
          ))}
        </ul>
      </NavBar>
    </>
  );
};

export default Navbar;
