import { Button} from "../../Components/Button";
import { Page } from "../../Components/Page";
import { useNavigate } from "react-router-dom"
import { WearItem } from './Components/WearItem';
import { WearListContainer} from '../Home/Styles';
import { HTTTP_METHODS, httpRequest } from "../../Utils/HttpRequest"
import React, { useEffect, useState } from "react";


const MyClothes = () => {
  const navigate = useNavigate();

  const [WEAR_LIST, setMyValue] = useState([{}]);

  useEffect( () => {

    async function getClothesRequest() {
      try {
        const response = await httpRequest({
          method: HTTTP_METHODS.GET,
          endpoint: '/clothe/mystuff'
        });

        setMyValue(response.data.clothe);

      } catch (error) {
        console.log(error);
        //customAlert({icon: ALERT_ICON.ERROR, title: 'Error', text:'No se logro dar de alta al usuario '});
      }
    }
    getClothesRequest();

  }, []);


  const handleClick = () => {
      navigate("/add-clothe");
  }

  return (
    <Page title="Mis Prendas">

      <Button text="Agregar" onPress={handleClick}></Button>
      {/* <section>

        <p>listado</p>

      </section> */}
      <WearListContainer>
      {
        WEAR_LIST.map((item, key) => <WearItem key={key} {...item} />)
      }
      </WearListContainer>
    </Page>

  )
}

export default MyClothes;
