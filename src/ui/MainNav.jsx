import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.main`
  display: flex;
  flex-direction: column;
  gap: 12rem;

  & div {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    color: #db261b;
    font-size: 1.6rem;
    font-weight: 400;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
    font-size: 1.4rem;
    cursor: pointer;
  }
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    color: #489494;
    font-size: 1.4rem;
    font-weight: 400;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: #489494;
    background-color: #d7ecec;
    border-radius: 6px;
  }

  & img {
    width: 2rem;
    height: 2rem;
    color: #79b0b0;
    transition: all 0.3s;
  }

  &:hover img,
  &:active img,
  &.active:link img,
  &.active:visited img {
    color: #79b0b0;
  }
`;

function MainNav() {
  return (
    <StyledNav id='styledNav'>
      <NavList>
        <li>
          <StyledNavLink to='/dashboard'>
            <img src='dashboard.png' alt='home' />
            <span>Home</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to='/sendMoney'>
            <img src='send.png' alt='send money' />
            <span>Send Money</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to='/investments'>
            <img src='investment.png' alt='Investment' />
            <span>Investments</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to='/loan'>
            <img src='loan.png' alt='Loan' />
            <span>Loan</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to='/cards'>
            <img src='card.png' alt='Card' />
            <span>Cards</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to='/transactions'>
            <img src='bill.png' alt='Bills' />
            <span>Transactions</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to='/marketplace'>
            <img src='3885905.png' alt='Marketplace' />
            <span>Marketplace</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to='/settings'>
            <img src='settings.png' alt='Settings' />
            <span>Settings</span>
          </StyledNavLink>
        </li>
      </NavList>

      <div>
        <img src='turn-off.png' alt='log out' />
        <span>Log out</span>
      </div>
    </StyledNav>
  );
}

export default MainNav;
