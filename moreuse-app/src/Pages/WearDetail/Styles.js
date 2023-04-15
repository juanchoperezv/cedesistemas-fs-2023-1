import styled from "styled-components";

export const WearDetailContainer = styled.div`
  //border: 1px solid red;
  display: flex;
  flex-direction: column;
`;

export const WearImageContainer = styled.div`
  //border: 1px solid red;
  width: 100%;
  display: flex;
  justify-content: center;
  img {
    //laptops y desktops
    width: 20%;
    //tablets y smartphones
    @media only screen and (max-width: 768px) {
      width: 40%;
    }
    height: auto;
  }
`;

export const WearDetailContent = styled.div`
  //border: 1px solid red;
  margin: 0 15px;
`;
