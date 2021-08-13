import styled from 'styled-components';
import { mixins } from './index';

export const Wrapper = styled.div`
  ${mixins.flexWrapFlow};
  margin: 0 40px;
  padding: 10px;
`;

export const WrapperStart = styled.div`
  ${mixins.flexWrapFlow};
  justify-content: start;
  margin: 0 40px;
  padding: 10px;
`;

export const Container = styled.div`
  ${mixins.flexCenter};
  flex-direction: column;
  margin: 3px;

  img {
    width: 190px;
  }
`;
