import styled from 'styled-components';
import Logo from './Logo';
import MainNav from './MainNav';

const StyledSidebar = styled.aside`
  background-color: #ffffff;
  padding: 2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);

  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

function Sidebar() {
  return (
    <StyledSidebar className='styledNav'>
      <Logo />
      <MainNav />
    </StyledSidebar>
  );
}

export default Sidebar;
