import {Page} from '../../Components/Page';
import { WearItem } from './Components/WearItem';
import { WearListContainer} from '../Home/Styles';

const WEAR_LIST = [
  {
    _id: 1,
    image: 'https://hmcolombia.vtexassets.com/arquivos/ids/2531773/Vestido-estampado-en-algodon---Rosado-claro-Gatito---H-M-CO.jpg?v=638128275678370000',
    name:'camisa',
    target: 'Niño',
    gender: 'Masculino'
  },
  {
    _id: 2,
    image: 'https://hmcolombia.vtexassets.com/arquivos/ids/2531773/Vestido-estampado-en-algodon---Rosado-claro-Gatito---H-M-CO.jpg?v=638128275678370000',
    name:'camisa',
    target: 'Niño',
    gender: 'Masculino'
  },
  {
    _id: 3,
    image: 'https://hmcolombia.vtexassets.com/arquivos/ids/2531773/Vestido-estampado-en-algodon---Rosado-claro-Gatito---H-M-CO.jpg?v=638128275678370000',
    name:'camisa',
    target: 'Niño',
    gender: 'Masculino'
  },
  {
    _id: 4,
    image: 'https://hmcolombia.vtexassets.com/arquivos/ids/2531773/Vestido-estampado-en-algodon---Rosado-claro-Gatito---H-M-CO.jpg?v=638128275678370000',
    name:'camisa',
    target: 'Niño',
    gender: 'Masculino'
  },
  {
    _id: 5,
    image: 'https://hmcolombia.vtexassets.com/arquivos/ids/2531773/Vestido-estampado-en-algodon---Rosado-claro-Gatito---H-M-CO.jpg?v=638128275678370000',
    name:'camisa',
    target: 'Niño',
    gender: 'Masculino'
  },
  {
    _id: 6,
    image: 'https://hmcolombia.vtexassets.com/arquivos/ids/2531773/Vestido-estampado-en-algodon---Rosado-claro-Gatito---H-M-CO.jpg?v=638128275678370000',
    name:'camisa',
    target: 'Niño',
    gender: 'Masculino'
  }
];

const Home = () => {
  return (
    <Page>
      <WearListContainer>
      {
        WEAR_LIST.map((item, key) => <WearItem key={key} {...item} />)
      }
      </WearListContainer>


    </Page>
  )
}

export default Home;
