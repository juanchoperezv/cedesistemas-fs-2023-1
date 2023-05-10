import { Button} from "../../Components/Button";
import { Page } from "../../Components/Page";
import { useNavigate } from "react-router-dom"
import { FormContainer, FormControl } from "../../globalStyles";
import { useForm} from 'react-hook-form'
import { TARGETS, GENDERS} from '../../Constants/index'


const AddClothe = () => {
  //para poder usar los formularios
  const {register, handleSubmit, formState: {errors}} = useForm();

  const onSubmitAddClothe = (data) => {
    console.log('datos', data);
    handleClick();
  }

  const navigate = useNavigate();

    const handleClick = () => {
        navigate("/my-clothes");
    }

  return (
    <Page title="Nueva Prenda">
      <FormContainer>
        <form onSubmit={handleSubmit(onSubmitAddClothe)} noValidate>
          <FormControl>
            <label>Imagen</label>
            <input type="url" {...register("image", {required: true})}/>
            {errors.image?.type === 'required' && <span>Campo requerido</span>}
          </FormControl>
          <FormControl>
            <label>Nombre</label>
            <input type="text" {...register("title", {required:true})}/>
            {errors.title?.type === 'required' && <span>Campo requerido</span>}
          </FormControl>
          <FormControl>
            <label>Público Objetivo</label>
            <select {...register("target", {required:true})}>
              {
                TARGETS.map((item, key) => <option key={key} value={item}>{item}</option>)
              }
            </select>
            {errors.target?.type === 'required' && <span>Campo requerido</span>}
          </FormControl>
          <FormControl>
            <label>Género</label>
            <select {...register("gender", {required:true})}>
              {
                GENDERS.map((item, key) => <option key={item.id} value={item.id}>{item.title}</option>)
              }
            </select>
            {errors.gender?.type === 'required' && <span>Campo requerido</span>}
          </FormControl>
          <FormControl>
            <label>Descripción</label>
            <textarea cols="30" rows="5" {...register("description", {required:true})}>
            </textarea>
            {errors.description?.type === 'required' && <span>Campo requerido</span>}
          </FormControl>
          <Button type="submit" text="Agregar Prenda"/>
        </form>
      </FormContainer>
    </Page>

  )
}

export default AddClothe;
