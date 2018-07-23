import styled from 'styled-components'

export default styled.button`
  font-family: ${({ theme }) => theme.bodyFontFamily};
  background-color: ${({ theme }) => theme.accentColor};
  border: 3px solid ${({ theme }) => theme.accentColor};
  font-size: 1.0rem;
  padding: .5rem 2rem;
  border-radius: 10px;
  color: white;
  &: hover {
    color: ${({ theme }) => theme.accentColor};
    background-color: transparent;
  }
`
