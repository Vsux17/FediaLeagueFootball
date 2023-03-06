/* eslint-disable jsx-a11y/alt-text */
import React from "react"
import './style.css';
import styled from 'styled-components';

export const H4Card = styled.h4`
 margin-bottom: -20px;
 font-weight: bold;
`;
export const Name = styled.p`
 /* margin-bottom: 20px; */
 display: 'flex', 
 /* alignItems: 'center', */
 alignItems: 'flex-end'
 text-align: center;
 font-family: Arial, sans-serif;
 font-size: 32px;
 font-weight: bold;

`;
export const Overall = styled.h2`
 margin-top: 25px;

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
                    <Overall class="colorWhite" > {props.jogador.overal}
    
                    </Overall>
    
                    <H4Card>

                    </H4Card>
                    <H4Card>
                        
                       
                    </H4Card>
    
    
                    <div class="imgBx">
    
    
                        <img src={props.jogador.imagem} />
    
                    </div>
                    <div class="contentBx colorWhite">
                      
                        <br></br>
                        
                            
                        <Name  >{props.jogador.nome}</Name>
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



