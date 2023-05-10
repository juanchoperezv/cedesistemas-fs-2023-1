import { Button} from "../../Components/Button";
import { Page } from "../../Components/Page";
import { useNavigate } from "react-router-dom"


const MyClothes = () => {
  const navigate = useNavigate();

  const handleClick = () => {
      navigate("/add-clothe");
  }

  return (
    <Page title="Mis Prendas">

      <Button text="Agregar" onPress={handleClick}></Button>
      <section>

        <p>listado</p>

      </section>
    </Page>

  )
}

export default MyClothes;
