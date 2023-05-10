import styled from "styled-components";

export const WearItemContainer = styled.div`
  //border: 1px solid red;
  width: 150px;
  display: flex;
  flex-direction: column;
  padding: 5px;
  align-items: center;

  h5 {
    margin: 0;
  }

  h3 {
    margin: 10px 0;
  }
`;

export const WearItemImage = styled.div`
  //border: 1px solid red;
  width: 100%;
  height: 160px;
  display: flex;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
  }
`;
