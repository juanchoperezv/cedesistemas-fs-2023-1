import {FaBars} from 'react-icons/fa';
import {TopbarContainer} from './styles';
import {MenuContext} from '../../Contexts/MenuContext';
import { useContext } from 'react';

export const Topbar = () => {
  //hace uso del valor usando el hook(useContext) del contexto
  const {menuState, changeMenuState} = useContext(MenuContext);

  const toggleMenu = ( ) => {
    changeMenuState();
  }

  return (
    <TopbarContainer>
      <div><FaBars onClick={toggleMenu}/></div>
      <div>
        <img width="100px" src="/assets/logo.png" alt="Logo More Use" />
      </div>
    </TopbarContainer>
  );
}
