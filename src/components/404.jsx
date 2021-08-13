import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { mixins } from '../helpers';

const Container = styled.div`
  ${mixins.pageCenter};
  padding: 0 150px;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
`;

const Title = styled.h1`
  font-family: var(--font-details);
  font-size: 30rem;
  line-height: 1;
  margin: 0 0 10px;
`;

const Subtitle = styled.h2`
  font-size: 5rem;
  font-weight: 400;
  margin: 0 0 10px;
`;

const Button = styled(Link)`
  ${mixins.button};
`;

const PageNotFound = () => {
  return (
    <Container>
      <Title>404</Title>
      <Subtitle>Page Not Found</Subtitle>
      <Button to="/">Go Home</Button>
    </Container>
  );
}

export default PageNotFound;
