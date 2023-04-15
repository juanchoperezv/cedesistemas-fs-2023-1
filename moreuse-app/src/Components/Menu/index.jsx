import {Link} from 'react-router-dom';
import {MenuContainer, MenuItemWrapper} from './styles'

const OptionsMenu = [
  {
    name: 'Inicio',
    path: '/'
  },
  {
    name: 'Perfile',
    path: '/profile'
  },
  {
    name: 'Mis Prendas',
    path: '/my-clothes'
  }
]

export const Menu = () => {
  return (
    <MenuContainer>
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
