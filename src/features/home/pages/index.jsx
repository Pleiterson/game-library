import React from 'react';
import styled from 'styled-components';

import { Footer, Header, Navbar, Titles } from '../../../components';
import { favorites, playing } from '../../../constants/playing';
import { Container, Wrapper, WrapperStart } from '../../../helpers/games';

const Span = styled.p`
  margin: 20px 40px 0;
  padding: 10px;
`;

const Home = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Titles />

      <Span>Jogando atualmente</Span>
      <WrapperStart>
        {playing && playing.map(({ name, imageURL }, i) => (
          <Container key={i}>
            <img src={imageURL} title={name} alt={name} />
            {/* <p>{name}</p> */}
          </Container>
        ))}
      </WrapperStart>

      <Span>Para ver mais jogos, vá ao menu Jogos</Span>
      <Wrapper>
        {favorites && favorites.map(({ name, imageURL }, i) => (
          <Container key={i}>
            <img src={imageURL} title={name} alt={name} />
            {/* <p>{name}</p> */}
          </Container>
        ))}
      </Wrapper>

      <Footer />
    </>
  );
};

export default Home;
