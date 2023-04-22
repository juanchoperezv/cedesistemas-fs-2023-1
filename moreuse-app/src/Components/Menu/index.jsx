import {Link} from 'react-router-dom';
import {MenuContainer, MenuItemWrapper, MenuCloseWrapper} from './styles'
import { IoClose } from 'react-icons/io5';
import {MenuContext} from '../../Contexts/MenuContext';
import { useContext } from 'react';

const OptionsMenu = [
  {
    name: 'Inicio',
    path: '/'
  },
  {
    name: 'Perfil',
    path: '/profile'
  },
  {
    name: 'Mis Prendas',
    path: '/my-clothes'
  },
  {
    name: 'Iniciar sesion',
    path: '/login'
  }
]

export const Menu = () => {
  //hace uso del valor usando el hook(useContext) del contexto
  const {menuState, changeMenuState} = useContext(MenuContext);

  const toggleMenu = ( ) => {
    changeMenuState();
  }

  return (
    <MenuContainer isShown={menuState.isOpen}>
      <MenuCloseWrapper onClick={toggleMenu}>
        <IoClose />
      </MenuCloseWrapper>
      <MenuItemWrapper>
        {
          OptionsMenu.map((item, index) => (
              <Link to={item.path} key={index}> <li>{item.name}</li> </Link>
            )
          )
        }
      </MenuItemWrapper>
    </MenuContainer>

  );
}
