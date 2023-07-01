import { Link, useNavigate } from "react-router-dom";
import { Button} from "../../Components/Button";
import { Page } from "../../Components/Page";
import { FormContainer, FormControl } from "../../globalStyles";
import { SignupContent } from "./Styles";
import { useForm} from 'react-hook-form'
import { EMAILEXPREGULAR } from "../../Constants";
import { HTTTP_METHODS, httpRequest } from "../../Utils/HttpRequest";
import { ALERT_ICON, customAlert } from "../../Components/Alert/Alert";
import { setToken } from "../../Utils/TokenLocalStorage";
import { UserContext } from '../../Contexts/UserContext';
import { useContext } from 'react';

const Login = () => {
  //hace uso del valor usando el hook(useContext) del contexto
  const {userState, changeUserState} = useContext(UserContext);

  const navigate = useNavigate();

  //para poder usar los formularios
  const {register, handleSubmit, formState: {errors}} = useForm();

  const onSubmitLogin = (data) => {
    validateUserRequest(data);
  }

  const validateUserRequest =  async (data) => {
    try {
      const response = await httpRequest({
        method: HTTTP_METHODS.POST,
        endpoint: '/auth/login',
        body: data
      });

      //poner el token al localstorage
      setToken(response.data.token);
      //changeUserState();

      customAlert({
        icon: ALERT_ICON.SUCCESS,
        title: 'Bienvenido',
        text:'Acceso valido',
        callback: () => {
          navigate('/');
        }
      });

    } catch (error) {
      console.log(error);
      customAlert({icon: ALERT_ICON.ERROR, title: 'Error', text:'Credenciales invalidas'});
    }
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
            <input type="password" {...register("password", {required:true, minLength: 6})}/>
            {errors.password?.type === 'required' && <span>Campo requerido</span>}
            {errors.password?.type === 'minLength' && <span>Mínimo 6 caracteres</span>}
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
