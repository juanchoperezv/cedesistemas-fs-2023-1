import { Link } from "react-router-dom"
import { WearItemContainer, WearItemImage } from "./Styles"

export const WearItem = ({_id, image, name, target, gender, price, status}) => {

  if (gender == 'F') {
    gender = 'Femenino'
  }else{
    gender = 'Masculino'
  }

  const clotheStatus = status == 1 ? 'Disponible' : 'Vendida';

  switch (target) {
    case '1m':
      target = '1 Mes'
      break;
    case '2m':
      target = '2 Meses'
      break;
    case '3m':
      target = '3 Meses'
      break;
    case '4m':
      target = '4 Meses'
      break;
    case '5m':
      target = '5 Meses'
      break;
    case '6m':
      target = '6 Meses'
      break;
    case '7m':
      target = '7 Meses'
      break;
    case '8m':
      target = '8 Meses'
      break;
    case '9m':
      target = '9 Meses'
      break;
    case '10m':
      target = '10 Meses'
      break;
    case '11m':
      target = '11 Meses'
      break;
    case '12m':
      target = '12 Meses'
      break;
    case 't2':
      target = 'Talla 2'
      break;
    case 't4':
      target = 'Talla 4'
      break;
    case 't6':
      target = 'Talla 6'
      break;
    case 't8':
      target = 'Talla 8'
      break;
    case 't10':
      target = 'Talla 10'
      break;
    case 't12':
      target = 'Talla 12'
      break;
    default:
      target = 'Talla 14'
      break;
  }

  return (
    <Link to={"/wear-detail/"+_id}>
      <WearItemContainer>
        <WearItemImage>
          <div>
            <img width="100px" src={image} alt="Wear Item" />
          </div>
        </WearItemImage>
        <h3>{name}</h3>
        <h5>{target} / {gender}</h5>
        <h3>{price}</h3>
        {clotheStatus}


      </WearItemContainer>
    </Link>



  )
}
