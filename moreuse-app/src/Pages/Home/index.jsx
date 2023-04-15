import {Page} from '../../Components/Page';
import { WearItem } from './Components/WearItem';
import { WearListContainer} from '../Home/Styles';

const WEAR_LIST = [
  {
    image: 'https://hmcolombia.vtexassets.com/arquivos/ids/2531773/Vestido-estampado-en-algodon---Rosado-claro-Gatito---H-M-CO.jpg?v=638128275678370000',
    name:'camisa',
    target: 'Niño',
    gender: 'Masculino'
  },
  {
    image: 'https://hmcolombia.vtexassets.com/arquivos/ids/2531773/Vestido-estampado-en-algodon---Rosado-claro-Gatito---H-M-CO.jpg?v=638128275678370000',
    name:'camisa',
    target: 'Niño',
    gender: 'Masculino'
  },
  {
    image: 'https://hmcolombia.vtexassets.com/arquivos/ids/2531773/Vestido-estampado-en-algodon---Rosado-claro-Gatito---H-M-CO.jpg?v=638128275678370000',
    name:'camisa',
    target: 'Niño',
    gender: 'Masculino'
  },
  {
    image: 'https://hmcolombia.vtexassets.com/arquivos/ids/2531773/Vestido-estampado-en-algodon---Rosado-claro-Gatito---H-M-CO.jpg?v=638128275678370000',
    name:'camisa',
    target: 'Niño',
    gender: 'Masculino'
  },
  {
    image: 'https://hmcolombia.vtexassets.com/arquivos/ids/2531773/Vestido-estampado-en-algodon---Rosado-claro-Gatito---H-M-CO.jpg?v=638128275678370000',
    name:'camisa',
    target: 'Niño',
    gender: 'Masculino'
  },
  {
    image: 'https://hmcolombia.vtexassets.com/arquivos/ids/2531773/Vestido-estampado-en-algodon---Rosado-claro-Gatito---H-M-CO.jpg?v=638128275678370000',
    name:'camisa',
    target: 'Niño',
    gender: 'Masculino'
  }
];

const Home = () => {
  return (
    <Page>
      <h1>Home Page</h1>
      <WearListContainer>
      {
        WEAR_LIST.map((item, key) => <WearItem key={key} {...item} />)
      }
      </WearListContainer>


    </Page>
  )
}

export default Home;
