import { useContext, useEffect } from "react";
import { removeToken } from "../../Utils/TokenLocalStorage";
import { UserContext } from "../../Contexts/UserContext";
import { useNavigate } from "react-router-dom";

const Logout = () => {

  const { removeUserAuth } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() =>{
    removeSesion();
  },[]);

  const removeSesion = () => {
    removeToken();
    removeUserAuth();

    navigate('/');
  }


  return (
    <p>
      Cerrando sesion
    </p>

  )
}

export default Logout;
