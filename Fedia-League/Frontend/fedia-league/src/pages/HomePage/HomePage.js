// import { Button } from "@material-ui/core";
import React from "react";
import styled from 'styled-components';
import logoJeju from '../../components/Img/jeju.png'
import { ButtonDireita, ButtonEsquerda, Flex1, FonteNegrito, FonteStatus, Lista, Lista1, Nickname } from "./styled";
import Posicao from "./Tabela"
import Artilharia from "./Artilharia";
import MVP from "./MVP";
import ArtilhariaCopa from "./ArtilhariaCopa";
import MVPcopa from "./MVPcopa";



export const Home = styled.div`
display:grid;
grid-template-columns: 1fr 7fr 1fr;
grid-template-rows: 1fr;
margin: 10px;
padding: 10px;
/* justify-self: center;
justify-items: center; */

justify-content: center;
`;
export const Esquerda = styled.div`
  display: flex;
justify-items: center;
text-align: left;
font-size: smaller;

`;
export const Direita = styled.div`
  display: flex;
justify-items: center;
text-align: left;
font-size: smaller;

`;
export const Flex = styled.div`
  display: flex;

font-size: smaller;
`;



export const Container = styled.div`
  display: flex;
flex-direction: column;
margin-left: 10px;
margin-right: 10px;
background-color: lightgray;
border-radius: 10px;

`;
export const Linha = styled.div`
  display: grid;
grid-template-columns: 1fr 2fr 2fr;
margin-left: 10px;
margin-right: 10px;


`;
export const Jeju = styled.img`
width: 298px;
height: 434px;
border-radius: 10px;
margin: 8px;
justify-content: center;
align-items: center;
align-self: center;
-webkit-box-shadow: 0px 5px 28px 2px rgba(0,0,0,0.41); 
box-shadow: 0px 5px 28px 2px rgba(0,0,0,0.41);
`

export const Margem = styled.div`
margin: 12px;
border: 12px;
border-radius: 10px;
background-color: white;
justify-content: center;
align-items: center;

`


export const HomePage = () => {
  return (



    <Home>

      <div>

        <Esquerda> 
          <Lista1>
          <ButtonEsquerda>
           Início
          </ButtonEsquerda>

          <ButtonEsquerda>
           Tabelas
          </ButtonEsquerda>

          <ButtonEsquerda>
            Jogadores
          </ButtonEsquerda>

          <ButtonEsquerda>
           Notícias
          </ButtonEsquerda>

          <ButtonEsquerda>
            Historico Financeiro
          </ButtonEsquerda>
          <ButtonEsquerda>
            Transferências
          </ButtonEsquerda>
          <ButtonEsquerda>
            Partidas
          </ButtonEsquerda>
          <ButtonEsquerda>
            Temporadas
          </ButtonEsquerda>
          <ButtonEsquerda>
           Cartões e Lesões
          </ButtonEsquerda>
          <ButtonEsquerda>
            Regulamento
          </ButtonEsquerda>
          <ButtonEsquerda>
           Usuários
          </ButtonEsquerda>
          <ButtonEsquerda>
            Sair
          </ButtonEsquerda>
       
        </Lista1>
        </Esquerda>
      </div>

      <Container>


        <Linha>


          <Margem>
            <Jeju src={logoJeju} />

          </Margem>


          <Margem>
            <FonteStatus>Status Atual</FonteStatus>

            <Flex>
              <FonteNegrito>Player:</FonteNegrito><Nickname>Vsux</Nickname>



            </Flex>

            <Flex>
              <FonteNegrito>
                Time:
              </FonteNegrito>
              <p>
                Jeju United
              </p>
            </Flex>

            <FonteNegrito>
              Últimas Cotratações:
            </FonteNegrito>

            <Lista>Diego Polenta, por € 1.500.000,00.</Lista>
            <Lista>Abdoulaye Seck, por € 1.500.000,00.</Lista>
            <Lista>Christian Luyindama, por € 3.600.000,00.</Lista>

          </Margem>
          <Margem>
            <FonteStatus>Contusões e Cartões</FonteStatus>


            <FonteNegrito>Lesionados:</FonteNegrito><p></p>






            <FonteNegrito>Cartões:</FonteNegrito>
            <Lista>Kim Joo Won, 1 cartão amarelo na Liga FEDIA.</Lista>
            <Lista>Lee Chang Min, 1 cartão amarelo na Liga FEDIA.</Lista>


          </Margem>


        </Linha>



        <div>
          {/* Tabela FEDIA league    */}
          <Posicao></Posicao>
          <Flex1>

            <Artilharia></Artilharia>

            <MVP></MVP>

          </Flex1>
          <Flex1>

            <ArtilhariaCopa></ArtilhariaCopa>

            <MVPcopa></MVPcopa>

          </Flex1>

        </div>
      </Container>

      <Direita>
        <Direita>
          <Lista1>
            <ButtonDireita>
              Artilharia da Liga
            </ButtonDireita>

            <ButtonDireita>
              MVP da Liga
            </ButtonDireita>

            <ButtonDireita>
              Copa
            </ButtonDireita>

            <ButtonDireita>
              Artilharia da Copa
            </ButtonDireita>

            <ButtonDireita>
              MVP da Copa
            </ButtonDireita>
          </Lista1>
        </Direita>

      </Direita>


    </Home>


  )
}