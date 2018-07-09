import styled from 'styled-components'

export default styled.button`
  font-family: ${({ theme }) => theme.bodyFontFamily};
  background-color: ${({ theme }) => theme.accentColor};
  border: 3px solid ${({ theme }) => theme.accentColor};
  font-size: 1.3rem;
  padding: .5rem 2.5rem;
  border-radius: 10px;
  color: white;
  &: hover {
    color: ${({ theme }) => theme.accentColor};
    background-color: transparent;
  }
`
