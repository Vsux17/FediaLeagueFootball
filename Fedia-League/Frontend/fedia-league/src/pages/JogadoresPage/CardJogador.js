/* eslint-disable jsx-a11y/alt-text */
import React from "react"
import './style.css';
import styled from 'styled-components';

export const H4Card = styled.h4`
 margin-bottom: -28px;

`;
export const ContainerPrincipal = styled.div`
 display: grid;
 grid-template-columns: 1fr 1fr 1fr 1fr 1fr  ;
 grid-template-rows: min-content 500px ;
 gap: 24px;


`;
export const SpanCard = styled.span`
 padding-left: 3px ;
 padding-right: 3px ;

`;
export const DivSemEspaco = styled.div`
 padding-left: 3px ;
 padding-right: 3px ;

`;




export const CardJogador = (props) => {
    return (
       
            <div class="container">
    
                <div class="card colorWhite ">
                    <div><h2 class="colorWhite">
                    </h2></div>
                    <div class="colorWhite" > {props.jogador.posicao} </div>
                    <h2 class="colorWhite" > {props.jogador.overal}
    
                    </h2>
    
                    <H4Card>
                        <img height="15" width="15" src="https://cdn.discordapp.com/attachments/374204805192876044/956689976823779408/unknown.png"></img>
                        {props.jogador.fintaStar} {props.jogador.finta}
                    </H4Card>
                    <H4Card>
                        <img height="15" width="15" src="https://cdn.discordapp.com/attachments/374204805192876044/956689976823779408/unknown.png"></img>
                        {props.jogador.prStar} {props.jogador.pernaRuim}
                    </H4Card>
    
    
                    <div class="imgBx">
    
    
                        <img src={props.jogador.imagem} />
    
                    </div>
                    <div class="contentBx colorWhite">
                        <p> a</p>
                        <h4  >{props.jogador.nome}</h4>
                        <div class="size">
                            <h6>Valor de Mercado </h6>
                            <SpanCard>{props.jogador.valorDeMercado}M</SpanCard>
                            <div class="size">
                                <h6>Idade </h6>
                                <span>{props.jogador.idade}</span>
    
                            </div>
    
                        </div>
    
                    </div>
                </div>
            </div>
    
    )


}



