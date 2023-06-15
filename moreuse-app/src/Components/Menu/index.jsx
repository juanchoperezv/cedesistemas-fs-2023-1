import { Link} from 'react-router-dom';
import { MenuContainer, MenuItemWrapper, MenuCloseWrapper} from './styles'
import { IoClose } from 'react-icons/io5';
import { MenuContext} from '../../Contexts/MenuContext';
import { UserContext} from '../../Contexts/UserContext';
import { useContext } from 'react';

const OptionsMenu = [
  {
    name: 'Inicio',
    path: '/',
    authRquired: false
  },
  {
    name: 'Inicio',
    path: '/',
    authRquired: true
  },
  {
    name: 'Perfil',
    path: '/profile',
    authRquired: true
  },
  {
    name: 'Mis Prendas',
    path: '/my-clothes',
    authRquired: true
  },
  {
    name: 'Iniciar sesion',
    path: '/login',
    authRquired: false
  },
  {
    name: 'Cerrar sesion',
    path: '/logout',
    authRquired: true
  }
]

export const Menu = () => {
  //hace uso del valor usando el hook(useContext) del contexto
  const {menuState, changeMenuState} = useContext(MenuContext);
  const {userState, changeUserState, setUserAuth, removeUserAuth} = useContext(UserContext);

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
          OptionsMenu.map((item, index) => {

              if (item.authRquired && userState.isAuth) {
                return <Link to={item.path} key={index}> <li>{item.name}</li> </Link>
              }
              if (!item.authRquired && !userState.isAuth) {
                return <Link to={item.path} key={index}> <li>{item.name}</li> </Link>
              }

            }
          )
        }
      </MenuItemWrapper>
    </MenuContainer>

  );
}
