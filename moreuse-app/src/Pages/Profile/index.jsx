import { Link } from "react-router-dom";
import { Button} from "../../Components/Button";
import { Page } from "../../Components/Page";
import { FormContainer, FormControl } from "../../globalStyles";
import {useForm} from 'react-hook-form'
import { EMAILEXPREGULAR } from "../../Constants";

const Profile = () => {
  //para poder usar los formularios
  const {register, handleSubmit, formState: {errors}} = useForm();

  const onSubmitRegister = (data) => {
    console.log('datos', data);
  }

  return (
    <Page title="Perfil Usuario">
      <FormContainer>
        <form onSubmit={handleSubmit(onSubmitRegister)} noValidate>
          <FormControl>
            <label>Nombre</label>
            <input type="text" {...register("name", {required:true})} />
            {errors.name?.type === 'required' && <span>Campo requerido</span>}
          </FormControl>
          <FormControl>
            <label>Correo electrónico</label>
            <input type="email" {...register("email", {required: true, pattern: EMAILEXPREGULAR})}/>
            {errors.email?.type === 'required' && <span>Campo requerido</span>}
            {errors.email?.type === 'pattern' && <span>Correo no valido</span>}
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
          <Button type="submit" text="Actualizar"/>
          </form>
      </FormContainer>
    </Page>

  )
}

export default Profile;
