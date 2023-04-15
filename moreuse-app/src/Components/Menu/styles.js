import styled from 'styled-components';

export const MenuContainer = styled.section`
  border: 4px solid #2EAAE2;
  width: 300px;
  //estatico = fixed
  position: fixed;
  top: 0px;
  background-color: #2C2E83;
  height: 100%;
  display: none; //temporal

`;

export const MenuItemWrapper = styled.ul`
  padding: 20px 15px;

  a {
    color: #fff;
    text-decoration: none;

    &:hover {
      color: red;
    }
  }


  li {
    list-style: none;
    //border: 1px solid #fff;

    margin-top: 10px;
    font-size: 1.3em;
  }
`;

export const MenuCloseWrapper = styled.div`
  display: flex;
  justify-content: right;
  padding: 20px;
  svg {
    color: #fff;
    font-size: 1.3em;
    cursor: pointer;
    &:hover {
      color: #2EAAE2;
    }
  }
`;


