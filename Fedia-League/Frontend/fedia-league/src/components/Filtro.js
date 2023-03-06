import React, { useState } from "react";
import { FediaNome } from "../pages/JogadoresPage/Jogadores";
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';

function Filtro({ onFilter }) {
  const [busca, setBusca] = useState("");

  function handleBuscaChange(event) {
    setBusca(event.target.value);
  }

  function handleFilter() {
    onFilter(busca);
  }

  return (
    <FediaNome>
       

        
             
           

     
 <TextField
  variant="standard"
  placeholder=" ex: Neymar"
 
 type="text" value={busca} onChange={handleBuscaChange} />

                
      <Button 
      variant="contained"
      
      onClick={handleFilter}>Buscar</Button>
    </FediaNome>
  );
}

export default Filtro;






