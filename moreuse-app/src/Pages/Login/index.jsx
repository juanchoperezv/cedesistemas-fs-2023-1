import { Link } from "react-router-dom";
import { Button} from "../../Components/Button";
import { Page } from "../../Components/Page";
import { FormContainer, FormControl } from "../../globalStyles";
import { SignupContent } from "./Styles";

const Login = () => {
  return (
    <Page title="Ingreso">
      <FormContainer>
        <form action="">
          <FormControl>
            <label>Correo electrónico</label>
            <input type="email" />
          </FormControl>
          <FormControl>
            <label>Contraseña</label>
            <input type="password" />
          </FormControl>
          <Button text="Ingresar"/>
        </form>
      </FormContainer>
      <SignupContent>
        <p>Aún no tienes una cuenta?</p>
        <Link to="/signup">Resgístrarme</Link>
      </SignupContent>

    </Page>

  )
}

export default Login;
