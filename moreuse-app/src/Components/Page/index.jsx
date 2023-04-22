import {Topbar} from '../Topbar';
import {Menu} from '../Menu';
import {PageContainer, PageTitleContainer} from './style';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import {MenuContext} from '../../Contexts/MenuContext';
import { useContext } from 'react';

export const Page = (props) => {
  //hace uso del valor usando el hook(useContext) del contexto
  const {menuState, closeMenu} = useContext(MenuContext);

  //const location = useLocation();

  //hook que ayuda a escuchar comportamientos
  useEffect(() => {
    //unica vez al cargar la pagina
    hideMenu();
  }, []);

  const hideMenu = () => {
    closeMenu();
  }

  return (
    <PageContainer>
      <Topbar />
        {
          //condicion, si viene titulo muestra el titulo
          props.title && (
            <PageTitleContainer>
              <h1>{props.title}</h1>
            </PageTitleContainer>
          )
        }
        <div>
          {props.children}
        </div>
      <Menu />
    </PageContainer>
  );
}