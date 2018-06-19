import styled from 'styled-components'

export default styled.div`
  column-count: 2;
  column-gap: 40px;
  
  @media (max-width: ${({ theme }) => theme.sBreakPoint}) {
    column-count: 1;
  }
`
