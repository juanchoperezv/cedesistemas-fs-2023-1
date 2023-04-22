import styled from "styled-components";

export const ButtonStyled = styled.button`
  width: 100%;
  background-color: #2C2E83;
  color: white;
  font-size: 1.1em;
  padding: 8px 8px;
  border-radius: 6px;
  opacity: 0.8;
  border: 0;
  margin: 0 5px;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
`;

export const Button = ({text="", type, onPress}) => {
  return (
    <ButtonContainer>
      <ButtonStyled type ={type} onClick={onPress}>
        {text}
      </ButtonStyled>
    </ButtonContainer>
  );
}
