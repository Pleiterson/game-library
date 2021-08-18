import React from 'react';
import styled from 'styled-components';
import { SiXbox } from 'react-icons/si'
import { Footer, Header, Navbar } from '../../../components';
import { lastAchievements, personal, personalHC, socialMedia, socialMediaHC } from '../../../constants/personal';
import { playing } from '../../../constants/games';
import { Icon } from '../../../_assets';
import { ContainerAchievements, Follow, Fragment, GamerScore, Info, Profile, SocialMedia } from './styled';
import { Container, WrapperStart } from '../../../helpers/games';

const Title = styled.h2`
  text-align: center;
  width: 40%;
  margin: 20px auto;
  padding: 10px;
  color: var(--color-text-one);
`;

const Span = styled.p`
  margin: 20px 40px 0;
  padding: 10px;
  color: var(--color-text-one);
`;

const About = () => {
  return (
    <Fragment>
      <Header />
      <Navbar />

      <Title>Abaixo você poderá visualizar meu perfil e de eu filho, e o link para nosso perfil oficial na Xbox</Title>

      {/* montagem do meu perfil */}
      {personal && personal.map(({ imageURL, score, gamertag, profile, name, followers, friends, location, description }, i) => (
        <Profile key={i}>
          <img src={imageURL} alt="profile" />
          <Info>
            <GamerScore>
              <p>G</p>
              <span>&nbsp;{score}</span>
            </GamerScore>
            <div className="gamertag">
              <h3>{gamertag}</h3>
              <a href={profile} target="_blank" rel="noreferrer"><SiXbox size={30} /></a>
            </div>
            <p>{name}</p>
            <Follow>
              <div>
                <p>Seguidores</p>
                <span>{followers}</span>
              </div>
              <div>
                <p>Amigos</p>
                <span>{friends}</span>
              </div>
              <div>
                <p>Localidade</p>
                <span>{location}</span>
              </div>
            </Follow>
            <p>{description}</p>

            {/* redes sociais */}
            <SocialMedia>
              {socialMedia && socialMedia.map(({ name, url }, i) => (
                <a key={i} href={url} title={name} target="_blank" rel="noreferrer">
                  <Icon name={name} />
                </a>
              ))}
            </SocialMedia>
            <em>para ver meu perfil oficial da Xbox, é só clicar na minha gamertag acima</em>
          </Info>
        </Profile>
      ))}

      {/* montagem do perfil do Hugo */}
      {personalHC && personalHC.map(({ imageURL, score, gamertag, profile, name, followers, friends, location, description }, i) => (
        <Profile key={i}>
          <img src={imageURL} alt="profile" />
          <Info>
            <GamerScore>
              <p>G</p>
              <span>&nbsp;{score}</span>
            </GamerScore>
            <div className="gamertag">
              <h3>{gamertag}</h3>
              <a href={profile} target="_blank" rel="noreferrer"><SiXbox size={30} /></a>
            </div>
            <p>{name}</p>
            <Follow>
              <div>
                <p>Seguidores</p>
                <span>{followers}</span>
              </div>
              <div>
                <p>Amigos</p>
                <span>{friends}</span>
              </div>
              <div>
                <p>Localidade</p>
                <span>{location}</span>
              </div>
            </Follow>
            <p>{description}</p>

            {/* redes sociais */}
            <SocialMedia>
              {socialMediaHC && socialMediaHC.map(({ name, url }, i) => (
                <a key={i} href={url} title={name} target="_blank" rel="noreferrer">
                  <Icon name={name} />
                </a>
              ))}
            </SocialMedia>
            <em>para ver meu perfil oficial da Xbox, é só clicar na minha gamertag acima</em>
          </Info>
        </Profile>
      ))}

      <Span>O que estamos jogando no momento... Para ver mais jogos, vá ao menu Jogos</Span>
      <WrapperStart>
        {playing && playing.map(({ name, imageURL }, i) => (
          <Container key={i}>
            <img src={imageURL} title={name} alt={name} />
            {/* <p>{name}</p> */}
          </Container>
        ))}
      </WrapperStart>

      {/* montagem das conquistas */}
      {lastAchievements && lastAchievements.map(({ date, imageProfile, gamertag, imageAchievements, title, score, achievement }, i) => (
        <ContainerAchievements key={i}>
          <div className="header">
            <div className="profile">
              <img src={imageProfile} alt="profile"/>
              <div className="gamer">
                <strong>{gamertag}</strong><br/>
                <span>desbloqueou uma conquista</span>
              </div>
            </div>
            <p>{date}</p>
          </div>
          <img src={imageAchievements} alt="conquista"/>
          <div className="achievement">
            <h5>{title}</h5>
            <div className="gamerScore">
              <p>G</p>
              <span>&nbsp;&nbsp;{score}&nbsp;</span>
              <span>-&nbsp;{achievement}</span>
            </div>
          </div>
        </ContainerAchievements>
      ))}

      <Footer />
    </Fragment>
  );
};

export default About;
