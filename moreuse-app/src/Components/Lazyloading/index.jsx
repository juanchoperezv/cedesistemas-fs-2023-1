import styled from 'styled-components';

const PageLoader = styled.section`
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CustomLoader = styled.div`
 width:50px;
  height:50px;
  border-radius:50%;
  padding:3px;
  background:
    radial-gradient(farthest-side,#766DF4 95%,#0000) 50% 0/12px 12px no-repeat,
    radial-gradient(farthest-side,#0000 calc(100% - 5px),#766DF4 calc(100% - 4px)) content-box;
  animation:s6 2s infinite ;

  @keyframes s6 {to{transform: rotate(1turn)}}
`;

export const Lazyloading = () => {
  return (
    <PageLoader>
      <CustomLoader />
    </PageLoader>
  );
}
