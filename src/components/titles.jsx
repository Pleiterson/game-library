import React from 'react';
import styled from 'styled-components';
import { mixins } from '../helpers';

const Title = styled.div`
  ${mixins.flexCenter};
  flex-direction: column;
  min-height: 25vh;

  h1 {
    font-size: 62px;
    font-family: var(--font-title);
    font-weight: 800;
    line-height: 60px;
    letter-spacing: -.1em;
    color: var(--color-text-two);
    margin: 0;
    padding: 0;
  }

  p {
    font-size: 24px;
    line-height: 28px;
  }
`;

const Titles = () => {
  return (
    <>
      <Title>
        <h1>CATÁLOGO DE JOGOS</h1>
        <p>Navegue pelo catálogo completo de todos os meus jogos</p>
      </Title>
    </>
  );
};

export default Titles;
