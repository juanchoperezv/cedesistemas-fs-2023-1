import styled, {createGlobalStyle} from 'styled-components';
export const TopbarHeight = 45;

export const Globalstyle = createGlobalStyle`
  *, ::after, ::before {
    box-sizing: border-box;
  }

  Body {
    margin: 0;
    padding: 0;
    font-family: 'Nunito Sans', sans-serif;
  }

  a {
    text-decoration: none;
    color: #2C2E83;
  }

  a:hover {
    color: #2EAAE2;
  }
`;

export const FormContainer = styled.section`
  display: flex;
  justify-content: center;
  form {
    width: 350px;
    //border: 1px solid red;
  }

`;

export const FormControl = styled.div`
  width: 100%;
  margin: 15px 0;
  label {
    width: 100%;
    display: block;
  }

  input, textarea, select {
    width: 100%;
    font-family: 'Nunito Sans', sans-serif;
    font-size: 1.1em;
    border: 1px solid #2C2E83;
    padding: 10px 12px;
    border-radius: 4px;

  }
  span {
    color: red;
    font-size: 0.8;
  }

  textarea {
    text-align: justify;
  }
`;


