import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import styled from 'styled-components';

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
`;

const Main = styled.main`
  padding: 1rem 1rem;
`;

function AppLayout() {
  // const [openNav, setOpenNav] = useState(false);

  return (
    <StyledAppLayout id='appLayout'>
      <Header />
      <Sidebar />
      <Main className='main'>
        <Outlet />
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
