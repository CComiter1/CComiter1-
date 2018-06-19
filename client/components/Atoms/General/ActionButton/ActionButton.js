import styled from 'styled-components'

export default styled.button`
  font-family: ${({ theme }) => theme.bodyFontFamily};
  background-color: transparent;
  border: 3px solid ${({ theme }) => theme.accentColor};
  font-size: 1.3rem;
  padding: 1rem 1.5rem;
  border-radius: 100rem;
  color: ${({ theme }) => theme.accentColor};
  &: hover {
    color: white;
    background-color: ${({ theme }) => theme.accentColor};
  }
`
