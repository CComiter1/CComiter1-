import styled from 'styled-components'

export default styled.div`
  display: grid;
  grid-template-columns: 100%;
  // grid-gap: 15px;
  padding: 15px 50px;

  @media (max-width: ${({ theme }) => theme.mBreakPoint}) {
    grid-template-columns: 100%;
  }
`
