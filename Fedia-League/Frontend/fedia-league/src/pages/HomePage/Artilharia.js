import React from 'react';
import { ButtonCenter, Caption, TableColocacao, Td, Th, Tr, TableArtilharia } from './styled';
import './styles.css';

const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = React.useState(config);

  const sortedItems = React.useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'ascending'
    ) {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort, sortConfig };
};

export const ProductTable = (props) => {
  const { items, requestSort, sortConfig } = useSortableData(props.products);
  const getClassposicaosFor = (posicao) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === posicao ? sortConfig.direction : undefined;
  };
  return (
 <div>
        <TableArtilharia>
          <Caption>Artilharia Liga FEDIA</Caption>
          <thead>
            <Tr>
              <Th>
                <ButtonCenter
                  type="button"
                  onClick={() => requestSort('gols')}
                  classposicao={getClassposicaosFor('gols')}
                >
                  Gols
                </ButtonCenter>
              </Th>
              <Th>
                <ButtonCenter
                  type="button"
                  onClick={() => requestSort('jogador')}
                  classposicao={getClassposicaosFor('jogador')}
                >
                  Jogador
                </ButtonCenter>
              </Th>
              <Th>
                <ButtonCenter
                  type="button"
                  onClick={() => requestSort('time')}
                  classposicao={getClassposicaosFor('time')}
                >
                  Time
                </ButtonCenter>
              </Th>
              
    
    
            </Tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <Td>{item.gols}</Td>
                <Td>{item.jogador}</Td>
                <Td>{item.time}</Td>
                
              </tr>
            ))}
          </tbody>
        </TableArtilharia>
 </div>

  );
};

export default function Artilharia() {
  return (
    <div classposicao="Artilharia">
      <ProductTable
        products={[
          { id: 1, gols: 1,jogador:"Luca toni", time: "Toronto", },
          { id: 2, gols: 5,jogador:"kiko", time: "Jeju", },

        


         

        ]}
      />
    </div>
  );
}
