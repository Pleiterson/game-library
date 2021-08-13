import React from 'react';
import styled from 'styled-components';
import { Playing } from '../_assets';

const Container = styled.div`
  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    object-position: center;
  }
`;

const Header = () => {
  return (
    <>
      <Container>
        <img alt="banner" src={Playing} />
      </Container>
    </>
  );
};

export default Header;
