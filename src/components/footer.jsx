import React from 'react';
import styled from 'styled-components';
import { FaCode } from 'react-icons/fa';
import { mixins } from '../helpers';

const Copyright = styled.div`
  ${mixins.flexCenter};
  font-size: 12px;
  justify-content: space-around;
  height: 50px;
  background-color: var(--color-background-two);
  color: var(--color-text-three);
`;

const Developer = styled.div`
  text-align: center;
  
  p {
    margin: 0;
  }

  a {
    color: var(--color-text-three);
    text-decoration: none;
  }
`;

const Footer = () => {
  return (
    <Copyright>
      <div>
        <p>PleiGames© 2021. Todos os direitos reservados.</p>
      </div>
      <Developer>
        <p>Desenvolvido por:</p>
        <a target="_blank" rel="noopener noreferrer" href="https://pleiterson.vercel.app/"><FaCode />&nbsp;&nbsp;<em>Pleiterson Amorim</em></a>
      </Developer>
    </Copyright>
  );
};

export default Footer;