import {Topbar} from '../Topbar';
import {Menu} from '../Menu';
import {PageContainer, PageTitleContainer} from './style';

export const Page = (props) => {
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
