import styled from 'styled-components';
const StyledMainLoan = styled.main`
  & ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 1rem;
    row-gap: 1rem;
    margin-left: 1.2rem;
    margin-right: 1.2rem;

    & li {
      width: 28rem;
      height: 30rem;
      padding: 2.4rem 2.4rem;
      background: #ffffff;
      border-radius: 6px;
      font-family: Poppins;

      & img {
        display: block;
        width: auto;
        height: 10rem;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 2rem;
      }
      & h2 {
        font-size: 18px;
        font-weight: 500;
        margin-bottom: 1.5rem;
        font-size: 1.35rem;
        color: #008080;
        text-align: center;
      }
      & p {
        text-align: center;
        font-size: 1.18rem;
        font-weight: 400;
        /* line-height: 24px; */
        color: #333333;
      }
    }
  }
`;
export default function Loan() {
  return (
    <StyledMainLoan>
      <ul id='loanList'>
        <li>
          <img src='One-Month.png' alt='one month' />
          <h2>One Month Loan</h2>
          <p>Access funds for personal upkeep for 30 days only</p>
        </li>
        <li>
          <img
            src='WorkingCapitalOverdraft.png'
            alt='Working Capital Overdraft'
          />
          <h2>Working Capital Overdraft</h2>
          <p>
            Access continuous funds to grow your business stocks and inventory
          </p>
        </li>
        <li>
          <img src='OperationOverdraft.png' alt='Operation Overdraft' />
          <h2>Operation Overdraft</h2>
          <p>Financing for your business operations</p>
        </li>
        <li>
          <img src='T&T.png' alt='T&T' />
          <h2>T and T Spread Loan</h2>
          <p>
            Purchase phones, generators and vehicles on a reasonable payment
            plan from T and T Deals Market
          </p>
        </li>
        <li>
          <img src='Infrastructure.png' alt='Infrastructure Loan' />
          <h2>Infrastructure Loan</h2>
          <p>
            Facility for your business to purchase vehicles, assets, and
            building upgrades.
          </p>
        </li>
        <li>
          <img src='Personal.png' alt='Personal Loan' />
          <h2>Personal Loan</h2>
          <p>Instant funds for your personal expenses.</p>
        </li>
        <li>
          <img src='Pawn.png' alt='pawn' />
          <h2>Pawn Loan</h2>
          <p>Get cash value on temporary sale of your items within 72hours.</p>
        </li>
        <li>
          <img src='Frame33.png' alt='Fx Loan' />
          <h2>FX Line</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </li>
      </ul>
    </StyledMainLoan>
  );
}
