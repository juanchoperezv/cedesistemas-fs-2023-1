import { Link, useNavigate } from "react-router-dom";
import { Button} from "../../Components/Button";
import { Page } from "../../Components/Page";
import { FormContainer, FormControl } from "../../globalStyles";
import {useForm} from 'react-hook-form'
import { EMAILEXPREGULAR } from "../../Constants";
import { ALERT_ICON, customAlert } from "../../Components/Alert/Alert";
import { HTTTP_METHODS, httpRequest } from "../../Utils/HttpRequest";
import { UserContext } from '../../Contexts/UserContext';
import { useContext } from 'react';

const Signup = () => {
  //hace uso del valor usando el hook(useContext) del contexto
  const {userState, changeUserState} = useContext(UserContext);

  const navigate = useNavigate();

  //para poder usar los formularios
  const {register, handleSubmit, formState: {errors}} = useForm();

  const onSubmitRegister = (data) => {
    console.log('datos', data);
    validateUserRequest(data);
  }

  const validateUserRequest =  async (data) => {
    try {
      const response = await httpRequest({
        method: HTTTP_METHODS.POST,
        endpoint: '/auth/signup',
        body: data
      });

      changeUserState();
      navigate('/');

    } catch (error) {
      console.log(error);
      customAlert({icon: ALERT_ICON.ERROR, title: 'Error', text:'No se logro dar de alta al usuario '});
    }
  }

  return (
    <Page title="Registro">
      <FormContainer>
        <form onSubmit={handleSubmit(onSubmitRegister)} noValidate>
          <FormControl>
            <label>Nombre</label>
            <input type="text" {...register("name", {required:true})}/>
            {errors.name?.type === 'required' && <span>Campo requerido</span>}
          </FormControl>
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
          <FormControl>
            <label>Dirección</label>
            <input type="text" {...register("address", {required:true})}/>
            {errors.address?.type === 'required' && <span>Campo requerido</span>}
          </FormControl>
          <FormControl>
            <label>Teléfono</label>
            <input type="number" {...register("phone", {required:true, minLength:10})}/>
            {errors.phone?.type === 'required' && <span>Campo requerido</span>}
            {errors.phone?.type === 'minLength' && <span>Mínimo 10 caracteres</span>}
          </FormControl>
          <Button type="submit" text="Registrar"/>
          </form>
      </FormContainer>
    </Page>

  )
}

export default Signup;
