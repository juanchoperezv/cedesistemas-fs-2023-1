import {FaBars} from 'react-icons/fa';
import {TopbarContainer} from './styles';

export const Topbar = () => {
  return (
    <TopbarContainer>
      <div><FaBars/></div>
      <div>
        <img width="100px" src="assets/logo.png" alt="Logo More Use" />
      </div>
    </TopbarContainer>
  );
}
