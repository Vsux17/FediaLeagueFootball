import React from 'react';
import { ButtonCenter, Caption, Td, Th, Tr } from './styled';
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
    <table>
      <Caption>Tabela Liga FEDIA</Caption>
      <thead>
        <Tr>
          <Th>
            <ButtonCenter
              type="button"
              onClick={() => requestSort('posicao')}
              classposicao={getClassposicaosFor('posicao')}
            >
              Posição
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

          <Th>
            <ButtonCenter
              type="button"
              onClick={() => requestSort('P')}
              classposicao={getClassposicaosFor('P')}
            >
              P
            </ButtonCenter>
          </Th>
          <Th>
            <ButtonCenter
              type="button"
              onClick={() => requestSort('J')}
              classposicao={getClassposicaosFor('J')}
            >
              J
            </ButtonCenter>
          </Th>
          <Th>
            <ButtonCenter
              type="button"
              onClick={() => requestSort('V')}
              classposicao={getClassposicaosFor('V')}
            >
              V
            </ButtonCenter>
          </Th>
          <Th>
            <ButtonCenter
              type="button"
              onClick={() => requestSort('E')}
              classposicao={getClassposicaosFor('E')}
            >
              E
            </ButtonCenter>
          </Th>
          <Th>
            <ButtonCenter
              type="button"
              onClick={() => requestSort('D')}
              classposicao={getClassposicaosFor('D')}
            >
              D
            </ButtonCenter>
          </Th>
          <Th>
            <ButtonCenter
              type="button"
              onClick={() => requestSort('GP')}
              classposicao={getClassposicaosFor('GP')}
            >
              GP
            </ButtonCenter>
          </Th>
          <Th>
            <ButtonCenter
              type="button"
              onClick={() => requestSort('GC')}
              classposicao={getClassposicaosFor('GC')}
            >
              GC
            </ButtonCenter>
          </Th>
          <Th>
            <ButtonCenter
              type="button"
              onClick={() => requestSort('SG')}
              classposicao={getClassposicaosFor('SG')}
            >
              SG
            </ButtonCenter>
          </Th>


        </Tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <Td>{item.posicao}</Td>
            <Td>{item.time}</Td>
            <Td>{item.P}</Td>
            <Td>{item.J}</Td>
            <Td>{item.V}</Td>
            <Td>{item.E}</Td>
            <Td>{item.D}</Td>
            <Td>{item.GP}</Td>
            <Td>{item.GC}</Td>
            <Td>{item.SG}</Td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default function App() {
  return (
    <div classposicao="App">
      <ProductTable
        products={[
          { id: 1, posicao: 1, time: "Toronto", P: 32, J: 14, V: 10, E: 2, D: 2, GP: 41, GC: 15, SG: 26 },

          { id: 2, posicao: 2, time: "Fc Cincinnati", P: 27, J: 14, V: 8, E: 3, D: 0, GP: 42, GC: 11, SG: 31 },

          { id: 3, posicao: 3, time: "Jeju United", P: 26, J: 14, V: 8, E: 2, D: 4, GP: 42, GC: 24, SG: 18 },

          { id: 4, posicao: 4, time: "Shanghai Port", P: 27, J: 14, V: 8, E: 3, D: 0, GP: 42, GC: 11, SG: 31 },

          { id: 5, posicao: 5, time: "Inter Miami", P: 27, J: 14, V: 8, E: 3, D: 0, GP: 42, GC: 11, SG: 31 },

          { id: 6, posicao: 6, time: "New England Revolution", P: 27, J: 14, V: 8, E: 3, D: 0, GP: 42, GC: 11, SG: 31 },

          { id: 7, posicao: 7, time: "Dallas", P: 27, J: 14, V: 8, E: 3, D: 0, GP: 42, GC: 11, SG: 31 },

          { id: 8, posicao: 8, time: "Orlando City", P: 27, J: 14, V: 8, E: 3, D: 0, GP: 42, GC: 11, SG: 31 },

          { id: 9, posicao: 9, time: "Houston Dynamo", P: 27, J: 14, V: 8, E: 3, D: 0, GP: 42, GC: 11, SG: 31 },

          { id: 10, posicao: 10, time: "Atlético San Luis", P: 27, J: 14, V: 8, E: 3, D: 0, GP: 42, GC: 11, SG: 31 },

          { id: 11, posicao: 11, time: "Al Ain", P: 27, J: 14, V: 8, E: 3, D: 0, GP: 42, GC: 11, SG: 31 },

          { id: 12, posicao: 12, time: "Al Shabab", P: 27, J: 14, V: 8, E: 3, D: 0, GP: 42, GC: 11, SG: 31 },


        ]}
      />
    </div>
  );
}
