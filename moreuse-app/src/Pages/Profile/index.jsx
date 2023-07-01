import { Link, useNavigate } from "react-router-dom";
import { Button} from "../../Components/Button";
import { Page } from "../../Components/Page";
import { FormContainer, FormControl } from "../../globalStyles";
import {useForm} from 'react-hook-form'
import { EMAILEXPREGULAR } from "../../Constants";
import { useContext } from "react";
import { UserContext } from "../../Contexts/UserContext";
import { ProfileContainer } from "./Styles";

const Profile = () => {
  const { userState } = useContext(UserContext);

  return (
    <Page title="Perfil Usuario">
      <ProfileContainer>
      <div class="inicio" style={{textAlign: "rigth",  }}><Link to='/'> Inicio</Link></div>
        <h3>Nombre</h3>
        <p>{userState.name}</p>
        <h3>Correo</h3>
        <p>{userState.email}</p>
        <h3>Dirección</h3>
        <p>{userState.address}</p>
        <h3>Teléfono</h3>
        <p>{userState.phone}</p>
      </ProfileContainer>



    </Page>

  )
}

export default Profile;
