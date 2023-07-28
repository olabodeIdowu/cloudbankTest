import styled from 'styled-components';

const StyledHeader = styled.header`
  font-family: Poppins;
  padding: 2.4rem 2rem;
  & h2 {
    font-size: 1.6rem;
    font-weight: 600;
    line-height: 36px;
    text-align: left;
  }
  & p {
    font-family: Poppins;
    font-size: 1.3rem;
    font-weight: 500;
    line-height: 24px;
    text-align: left;
    color: #333333;

    & span {
      color: #008080;
      font-weight: 400;
    }
  }
`;

function Header() {
  return (
    <StyledHeader>
      <h2>Loans</h2>
      <p>
        <span>Monday</span>, 21st February, 2021
      </p>
    </StyledHeader>
  );
}

export default Header;
