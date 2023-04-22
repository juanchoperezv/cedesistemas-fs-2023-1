import { useParams } from "react-router-dom";
import { Button} from "../../Components/Button";
import { Page } from "../../Components/Page";
import { WearDetailContainer, WearImageContainer, WearDetailContent } from "./Styles";

const WearDetail = () => {

  const {id} = useParams();

  return (
    <Page>
      <section>
        <WearDetailContainer>
          <WearImageContainer>

              <img width="100px" src="https://hmcolombia.vtexassets.com/arquivos/ids/2531773/Vestido-estampado-en-algodon---Rosado-claro-Gatito---H-M-CO.jpg?v=638128275678370000" alt="" />

          </WearImageContainer>

          <WearDetailContent>
            <h6>Referencia: {id}</h6>
            <h3>Camisa</h3>
            <h5>Niño - Maculino</h5>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam voluptatibus, est aperiam eaque quidem officia voluptas sunt. Porro eligendi minima, at enim quisquam fugit, officiis inventore facere voluptatibus animi accusantium!</p>
          </WearDetailContent>
        </WearDetailContainer>

         <Button text="Comprar"></Button>
      </section>
    </Page>

  )
}

export default WearDetail;
