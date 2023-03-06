import React from 'react';
import { Link } from 'react-router-dom';
import { Esquerda } from '../../HomePage/HomePage';
import { ButtonEsquerda, Lista1 } from './../../HomePage/styled';

const Header = () => {
  return (
    <div>
      <Esquerda>
        <Lista1>
          <Link to="/">
            <ButtonEsquerda>
              Início
            </ButtonEsquerda>
          </Link>

          <ButtonEsquerda>
            Tabelas
          </ButtonEsquerda>

          <Link to="/lista-jogadores">
            <ButtonEsquerda>
              Jogadores
            </ButtonEsquerda>
          </Link>

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
  );
};

export default Header;
