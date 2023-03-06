import { HeadsetRounded, ListAltOutlined } from "@mui/icons-material"
import { Button, Card, List, Table, TablePagination, TextField } from "@mui/material"
import { listaDeJogadores } from "../../components/Jogadores/jogadores"
import { CardJogador, ContainerPrincipal } from "./CardJogador"
import { TelaHome } from "./style"
import styled from 'styled-components';
import Header from './../Header/Header/Header';
import Tabela from './../../components/Filtro';



export const HeaderFedia = styled.header`
margin-top:24px ;
  border: 0;
display: flex;
justify-content: space-between;
`;
export const FediaNome = styled.div`

 display: flex;
 align-items: center;

`;




export const Player = () => {

    const listPlayer = listaDeJogadores.map((j) => {
        return <div key={j.nome} >

            <CardJogador
                jogador={j}

            />


        </div>
    })

    return (
        <div>
            

            <HeaderFedia  > <img width="60px" src="https://cdn.discordapp.com/attachments/374204805192876044/956709850723799060/pp.png" ></img>
                <FediaNome> Fedia</FediaNome>
             
                    

<Tabela></Tabela>
             
                    
                  
            </HeaderFedia>
            <TelaHome>

            <Header></Header>


                <ContainerPrincipal>{listPlayer}</ContainerPrincipal>

            </TelaHome>
<footer>@Vsux</footer>

        </div>
    )

}   
