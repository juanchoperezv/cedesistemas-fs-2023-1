import { Link } from "react-router-dom";
import { Button} from "../../Components/Button";
import { Page } from "../../Components/Page";
import { FormContainer, FormControl } from "../../globalStyles";


const Signup = () => {
  return (
    <Page title="Registro">
      <FormContainer>
        <form action="">
          <FormControl>
            <label>Nombre</label>
            <input type="text" />
          </FormControl>
          <FormControl>
            <label>Correo electrónico</label>
            <input type="email" />
          </FormControl>
          <FormControl>
            <label>Contraseña</label>
            <input type="password" />
          </FormControl>
          <FormControl>
            <label>Dirección</label>
            <input type="text" />
          </FormControl>
          <FormControl>
            <label>Teléfono</label>
            <input type="number" />
          </FormControl>
          <Button text="Registrar"/>
          </form>
      </FormContainer>
    </Page>

  )
}

export default Signup;
