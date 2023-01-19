import styled from 'styled-components';



export const FonteStatus = styled.p`

font-size: xx-large;
padding: 8px;

`
export const FonteNegrito = styled.p`
padding-right: 8px;
padding-left: 8px;
font-weight: 630;
margin-left: 8px;
`
export const Nickname = styled.p`


`

export const Td = styled.td`
  justify-content: center;
  align-items: center;
  align-self: center;
  border-left: solid 2px black;
  
  background-color: white;
  &:hover{

 }
  
`;
export const Tr = styled.tr`

 &:hover{
  background-color: #90caf9;;
 }
`;
export const Th = styled.th`
  justify-content: center;
  text-decoration: overline;
background-color: white;



`;
export const ButtonCenter = styled.button`
  justify-content: center;
align-items: center;
background-color: white;
&:hover{
  cursor: pointer;
text-decoration: underline;
}


`;
export const Lista = styled.li`
list-style: none;
margin-left: 8px;
font-weight: 300;
font-size: medium;

`
export const Lista1 = styled.li`
list-style: none;



`

export const ButtonDireita = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  text-decoration: none;
  color: #555555;
  font-size: 18px;
  border-radius: 5px;
  width: 200px;
  height: 40px;
  font-weight: bold;
  border: 2px solid #555555;
  transition: 0.3s;
  box-shadow: 0px 6px 0px -2px rgba(67, 145, 209, 1);
  background-color: #90caf9;
  margin:8px;
&:hover{
  cursor: pointer;
  box-shadow: 0 0 #fff;
  transform: translateY(1px);

`;
export const ButtonEsquerda = styled.button`

 background-color: rgba(23, 26, 32, 0.8); 
 border: none; 
 border-radius: 6px; 
 color: #fff; 
 flex-grow: 1; 
 font-family: SFProText-Regular, Helvetica, Arial, sans-serif; 
 font-size: 15px; 
 height: 36px; 
 line-height: 20px; 
 margin-left: 8px; 
 margin-right: 6px; 
 min-width: 185px; 
 padding: 0 16px 0 16px; 
 color:white; 
 cursor: pointer; 
 
}

  margin:8px;
&:hover{
 background-color: rgba(23, 26, 32, 1); 
 cursor: pointer; 
}
`;


export const Caption = styled.caption`
margin-top: 16px;
background-color:  #39adb4;
border-radius: 8px 8px 0px 0px;
color: white;

`

export const TableColocacao = styled.table`
  border-collapse: collapse;
    text-indent: center;
    border: solid 2px black;
   border-radius: 80px;
   width: 100%;
   align-items:center;
`;
export const TableArtilharia = styled.table`

  border-collapse: collapse;
    text-indent: center;
    border: solid 2px black;
   border-radius: 80px;
   width: 30%;
   align-items:center;
   gap:4px;
`;
export const Flex1= styled.div`


display: flex;
justify-content: space-around
`;
