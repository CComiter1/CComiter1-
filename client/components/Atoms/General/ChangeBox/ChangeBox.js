import React from 'react'
import styled from 'styled-components'

const ButtonSpecial = styled.button`
    font-family: ${({ theme }) => theme.bodyFontFamily};
    background-color: transparent;
    border: 1px solid;
    padding: 2px;
    text-align: left
    font-size: 0.9rem;
    margin-right: 20px;
    width: 100px;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
`

export default props => (
  <ButtonSpecial {...props} >
    {props.children} <i className="fa fa-close" />
  </ButtonSpecial>
)
