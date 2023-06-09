import { useParams } from "react-router-dom";
import { Button} from "../../Components/Button";
import { Page } from "../../Components/Page";
import { WearDetailContainer, WearImageContainer, WearDetailContent } from "./Styles";
import { HTTTP_METHODS, httpRequest } from "../../Utils/HttpRequest"
import React, { useEffect, useState } from "react";
import { Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom"

const WearDetail = () => {
  const [responseData, setMyValue] = useState({});
  const navigate = useNavigate();

  const {id} = useParams();

  useEffect( () => {

    async function getClotheRequest() {
      try {
        const response = await httpRequest({
          method: HTTTP_METHODS.GET,
          endpoint: '/clothe/detail/'+id
        });

        if (response.data.clothe.gender == 'F') {
          response.data.clothe.gender = 'Femenino'
        }else{
          response.data.clothe.gender = 'Masculino'
        }

        switch (response.data.clothe.target) {
          case '1m':
            response.data.clothe.target = '1 Mes'
            break;
          case '2m':
            response.data.clothe.target = '2 Meses'
            break;
          case '3m':
            response.data.clothe.target = '3 Meses'
            break;
          case '4m':
            response.data.clothe.target = '4 Meses'
            break;
          case '5m':
            response.data.clothe.target = '5 Meses'
            break;
          case '6m':
            response.data.clothe.target = '6 Meses'
            break;
          case '7m':
            target = '7 Meses'
            break;
          case '8m':
            response.data.clothe.target = '8 Meses'
            break;
          case '9m':
            response.data.clothe.target = '9 Meses'
            break;
          case '10m':
            response.data.clothe.target = '10 Meses'
            break;
          case '11m':
            response.data.clothe.target = '11 Meses'
            break;
          case '12m':
            response.data.clothe.target = '12 Meses'
            break;
          case 't2':
            response.data.clothe.target = 'Talla 2'
            break;
          case 't4':
            response.data.clothe.target = 'Talla 4'
            break;
          case 't6':
            response.data.clothe.target = 'Talla 6'
            break;
          case 't8':
            response.data.clothe.target = 'Talla 8'
            break;
          case 't10':
            response.data.clothe.target = 'Talla 10'
            break;
          case 't12':
            response.data.clothe.target = 'Talla 12'
            break;
          default:
            response.data.clothe.target = 'Talla 14'
            break;
        }

        setMyValue(response.data.clothe);

      } catch (error) {
        console.log(error);
        //customAlert({icon: ALERT_ICON.ERROR, title: 'Error', text:'No se logro dar de alta al usuario '});
      }
    }
    getClotheRequest();

  }, []);

  const onBuy = () =>{
    navigate("/payment/"+id);
  }

  return (
    <Page>
      <section>

        <WearDetailContainer>
          <div class="inicio" style={{textAlign: "rigth",  }}><Link to='/'> Inicio</Link></div>
          <WearImageContainer>

              <img width="100px" src={responseData.image} alt="" />

          </WearImageContainer>

          <WearDetailContent>
            <h6>Referencia: {responseData._id}</h6>
            <h3>{responseData.name}</h3>
            <h5>{responseData.target} - {responseData.gender}</h5>
            <p>{responseData.description}</p>
            <h2>{responseData.price}</h2>
          </WearDetailContent>
        </WearDetailContainer>

         <Button text="Comprar" type="button" onPress={onBuy}></Button>
      </section>
    </Page>

  )
}

export default WearDetail;
