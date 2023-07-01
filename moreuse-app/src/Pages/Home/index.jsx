import {Page} from '../../Components/Page';
import { WearItem } from './Components/WearItem';
import { WearListContainer} from '../Home/Styles';
import { HTTTP_METHODS, httpRequest } from "../../Utils/HttpRequest"
import React, { useEffect, useState } from "react";

const Home = () => {
  const [WEAR_LIST, setMyValue] = useState([{}]);

  useEffect( () => {
    getClothesRequest();
  }, []);

  const getClothesRequest = async() => {
    try {
      const response = await httpRequest({
        method: HTTTP_METHODS.GET,
        endpoint: '/clothe'
      });

      setMyValue(response.data.clothes);

    } catch (error) {
      console.log(error);
    }
  }

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
