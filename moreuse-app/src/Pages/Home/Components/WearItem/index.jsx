import { Link } from "react-router-dom"
import { WearItemContainer, WearItemImage } from "./Styles"

export const WearItem = ({_id, image, name, target, gender}) => {
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
      </WearItemContainer>
    </Link>



  )
}
