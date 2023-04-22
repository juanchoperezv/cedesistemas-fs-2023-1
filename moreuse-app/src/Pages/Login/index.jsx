import { Link } from "react-router-dom";
import { Button} from "../../Components/Button";
import { Page } from "../../Components/Page";
import { FormContainer, FormControl } from "../../globalStyles";
import { SignupContent } from "./Styles";
import {useForm} from 'react-hook-form'
import { EMAILEXPREGULAR } from "../../Constants";

const Login = () => {
  //para poder usar los formularios
  const {register, handleSubmit, formState: {errors}} = useForm();

  const onSubmitLogin = (data) => {
    console.log('datos', data);
  }

  return (
    <Page title="Ingreso">
      <FormContainer>
        <form onSubmit={handleSubmit(onSubmitLogin)} noValidate>
          <FormControl>
            <label>Correo electrónico</label>
            <input type="email" {...register("email", {required: true, pattern: EMAILEXPREGULAR})}/>
            {errors.email?.type === 'required' && <span>Campo requerido</span>}
            {errors.email?.type === 'pattern' && <span>Correo no valido</span>}
          </FormControl>
          <FormControl>
            <label>Contraseña</label>
            <input type="password" {...register("password", {required:true, minLength: 8})}/>
            {errors.password?.type === 'required' && <span>Campo requerido</span>}
            {errors.password?.type === 'minLength' && <span>Mínimo 8 caracteres</span>}
          </FormControl>
          <Button type="submit" text="Ingresar"/>
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
