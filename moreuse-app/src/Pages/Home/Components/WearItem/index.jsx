import { WearItemContainer, WearItemImage } from "./Styles"

export const WearItem = ({image, name, target, gender}) => {
  return (

    <WearItemContainer>
      <WearItemImage>
        <div>
          <img width="100px" src={image} alt="Wear Item" />
        </div>
      </WearItemImage>
      <h3>{name}</h3>
      <h5>{target} / {gender}</h5>
    </WearItemContainer>


  )
}
