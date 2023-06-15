import styled from "styled-components";

export const WearDetailContainer = styled.div`
  //border: 1px solid red;
  display: flex;
  flex-direction: column;

  .inicio {
    //margin: 0 15px;
    padding-bottom: 10px;
    width: 100%;
    //border: 1px solid red;
    text-align: end;
    padding-right: 10px;
    font-size: 1.2rem;
  }
`;

export const WearImageContainer = styled.div`
  //border: 1px solid red;
  width: 100%;
  display: flex;
  justify-content: center;
  img {
    //laptops y desktops
    width: 10%;
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
  h5, p, h4, h2, h3 {
    margin: 0;
  }
`;
