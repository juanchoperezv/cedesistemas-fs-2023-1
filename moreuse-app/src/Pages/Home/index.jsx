import {Page} from '../../Components/Page';
import { WearItem } from './Components/WearItem';
import { WearListContainer} from '../Home/Styles';
import { HTTTP_METHODS, httpRequest } from "../../Utils/HttpRequest"
import React, { useEffect, useState } from "react";

const Home = () => {
  const [WEAR_LIST, setMyValue] = useState([{}]);

  useEffect( () => {

    async function getClothesRequest() {
      try {
        const response = await httpRequest({
          method: HTTTP_METHODS.GET,
          endpoint: '/clothe'
        });

        console.log(response);
        setMyValue(response.data.clothes);
        console.log(response);

      } catch (error) {
        console.log(error);
        //customAlert({icon: ALERT_ICON.ERROR, title: 'Error', text:'No se logro dar de alta al usuario '});
      }
    }
    getClothesRequest();

  }, []);

  return (
    <Page>
      <WearListContainer>
      {
        WEAR_LIST.map((item, key) => <WearItem key={key} {...item} />)
      }
      </WearListContainer>
    </Page>
  )
}

export default Home;
