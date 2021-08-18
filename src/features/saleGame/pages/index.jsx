import React from 'react';
import styled from 'styled-components';
import { Footer, Navbar } from '../../../components';
import { email, saleGames } from '../../../constants/sale';
import { mixins } from '../../../helpers';
import { Xbox } from '../../../_assets';

const Instruction = styled.div`
  justify-content: start;
  margin: 20px;
  padding: 10px;

  p {
    margin: 0;
  }
`;

const Wrapper = styled.div`
  ${mixins.flexStart};
  flex-direction: column;
  background-color: var(--color-background-one);
  -webkit-filter: drop-shadow(0px 5px 5px rgba(0,0,0,.5));
  filter: drop-shadow(0px 5px 5px rgba(0,0,0,.5));
  margin: 20px;
  padding: 20px 10px;

  h2 {
    font-weight: 500;
  }
`;

const GameData = styled.div`
  ${mixins.flexCenter};
  flex-direction: row;
  justify-content: start;
  width: 100%;
  position: relative;

  .imageGame {
    img {
      width: 200px;
      margin: 0 30px;
    }
  }

  .game {
    img {
      width: 100px;
    }
  }

  .price {
    font-size: 25px;
    font-weight: 500;
  }

  .email {
    ${mixins.button};
    position: absolute;
    right: 30em;
    top: 4em;
  }
`;

const Classification = styled.div`
  ${mixins.flexStart};
  
  p {
    border-radius: 4px;
    padding: 15px;
    margin-right: 20px;
    color: var(--color-text-one);
    font-weight: bolder;
    font-size: 20px;
  }

  .livre {
    background-color: #00A54E;
  }

  .age14 {
    background-color: #F58220;
  }

  .age16 {
    background-color: #EA2127;
  }

  .age18 {
    background-color: #000000;
  }
`;

const AdditionalData = styled.div`
  flex-direction: column;
  margin: 20px;
  padding: 10px;

  .wrap {
    ${mixins.flexStart};
    
    div {
      margin-right: 80px;
    }
  }

  .screenshots {
    margin: 35px 0;

    img {
      width: 340px;
      padding-right: 15px;
    }
  }

  .information {
    ${mixins.flexStart};
    
    h4 {
      margin: 0;
    }

    div {
      margin-right: 80px;
    }
  }
`;

const Sale = () => {
  return (
    <>
      <Navbar />

      <Instruction>
        <p>Todos os jogos são usados e não estão danificados.</p>
        <p>Clique no botão comprar para entrar em contato via email.</p>
        <ul>
          <li><strong>Vendo apenas mídia física!</strong></li>
          <li>Todos os jogos são para Xbox</li>
          <li>Aceito parcelamento via PicPay ou transferência via pix;</li>
          <li>Venda  para Belo Horizonte e região (retirada presencial);</li>
          <li>Para outras cidades podemos conversar sobre frete (será incluído no valor da compra).</li>
        </ul>
      </Instruction>

        {saleGames && saleGames.map(({
          name,
          imageURL,
          category,
          company,
          classification,
          classification1,
          classNumber,
          info,
          releaseDate,
          synopsis,
          platforms,
          resources,
          price,
          observation,
          image1,
          image2,
          image3,
          image4,
          image5
        }, i) => (
          <Wrapper key={i}>
            <GameData>
              <div className="imageGame">
                <img alt={name} src={imageURL}/>
              </div>
              <div className="game">
                <img alt="xbox" src={Xbox}/>
                <h1>{name}</h1>
                <p className="price">{price}</p>
                <span>{company} - {category}</span>
                <Classification>
                  <div>
                    <p className={classNumber}>{classification}</p>
                  </div>
                  <div>
                    <span><strong>{classification1}</strong></span><br/>
                    <span>{info}</span>
                  </div>
                </Classification>
                <p><em>{observation}</em></p>
              </div>
              <a href={`mailto:${email}`} className="email">Entre em contato</a>
            </GameData>
            <AdditionalData>
              <div className="wrap">
                <div>
                  <h2>Disponível para</h2>
                  <p>{platforms}</p>
                </div>
                <div>
                  <h2>Recursos</h2>
                  <p>{resources}</p>
                </div>
              </div>
              <div>
                <h2>Sinopse do Jogo</h2>
                <p>{synopsis}</p>
              </div>
              <div className="screenshots">
                <h2>Capturas de tela</h2>
                <img alt="screenshots" src={image1}/>
                <img alt="screenshots" src={image2}/>
                <img alt="screenshots" src={image3}/>
                <img alt="screenshots" src={image4}/>
                <img alt="screenshots" src={image5}/>
              </div>
              <h2>Informações Adicionais</h2>
              <div className="information">
                <div>
                  <h4>Publicado por</h4>
                  <span>{company}</span>
                </div>
                <div>
                  <h4>Classificação etária</h4>
                  <span>{classification1}</span>
                </div>
                <div>
                  <h4>Categoria</h4>
                  <span>{category}</span>
                </div>
                <div>
                  <h4>Data de lançamento</h4>
                  <span>{releaseDate}</span>
                </div>
              </div>
            </AdditionalData>
          </Wrapper>
        ))}

        <Footer />
    </>
  );
};

export default Sale;
