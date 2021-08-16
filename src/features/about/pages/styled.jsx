import styled from 'styled-components';
import { mixins } from '../../../helpers';

export const Fragment = styled.div`
  background-color: var(--color-background-five);
`;

export const Profile = styled.div`
  ${mixins.flexCenter};
  background-color: var(--color-background-two);
  color: var(--color-text-one);
  width: 70%;
  margin: 0 auto;
  padding: 10px;

  img {
    border-radius: 50%;
    width: 250px;
    margin-left: 50px;
  }
`;

export const Info = styled.div`
  margin: 0 50px;
  
  .gamertag {
    ${mixins.flexCenter};
    justify-content: start;
    /* align-items: center; */

    h3 {
      margin: 15px 0;
      padding: 0;
      font-size: 34px;
      font-weight: 400;
    }

    a {
      padding-left: 10px;
      text-decoration: none;
      color: var(--color-text-one);
    }
  }
`;

export const GamerScore = styled.p`
  ${mixins.flexCenter};
  justify-content: start;

  p {
    background-color: var(--color-background-one);
    color: var(--color-text-two);
    border-radius: 50%;
    width: 1.5%;
    text-align: center;
    font-size: 10px;
  }
`;

export const Follow = styled.div`
  ${mixins.flexCenter};
  justify-content: start;

  div {
    padding-right: 5em;
  }

  p {
    margin: 0;
    padding: 0;
  }

  span {
    font-size: 24px;
  }
`;

export const SocialMedia = styled.div`
  ${mixins.flexCenter};
  flex-direction: row;
  justify-content: start;
  margin-bottom: 10px;

  a {
    padding-right: 30px;
    text-decoration: none;
  }
`;

export const ContainerAchievements = styled.div`
  background-color: var(--color-background-six);
  color: var(--color-text-one);
  width: 71%;
  margin: 20px auto;

  img {
    width: 90.1em;
    padding: 0;
  }

  .header {
    ${mixins.flexBetween};
    padding: 10px;
  }

  .profile {
    ${mixins.flexCenter};

    img {
      border-radius: 50%;
      width: 40px;
    }
  }

  .gamer {
    padding-left: 10px;
  }

  .achievement {
    justify-content: start;
    padding: 10px 10px 0;
    
    h5 {
      margin: 0;
      font-size: 20px;
      font-weight: 400;
    }

    .gamerScore {
      ${mixins.flexCenter};
      justify-content: start;

      p {
        background-color: var(--color-background-one);
        color: var(--color-text-four);
        border-radius: 50%;
        width: 1.1%;
        text-align: center;
        font-size: 10px;
      }
    }
  }
`;
