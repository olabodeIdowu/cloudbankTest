import styled from 'styled-components';

const StyledLogo = styled.div`
  padding: 1.2rem 1.6rem;
`;

const Img = styled.img`
  height: 4.5rem;
  width: auto;
`;

function Logo() {
  return (
    <>
      <StyledLogo id='logo'>
        <Img src='/cloudbank.png' alt='Logo' />
      </StyledLogo>
    </>
  );
}

export default Logo;
