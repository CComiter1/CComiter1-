import React, {Component} from 'react'; 
import styled from 'styled-components';

// Create a Title component that'll render an <h1> tag with some styles

export default styled.h1`
    font-family: ${({ theme }) => theme.bodyFontFamily};
    text-align: left
    font-size: 1.7rem;
    text-decoration: underline;
    color: ${({ theme }) => theme.accentColor};
    &: link {
        color: ${({ theme }) => theme.accentColor};
    }
    &: hover {
        color: blue;
    }
`

// border: 1px outset blue;
// background-color: lightBlue;
// height:50px;
// width:50px;
// cursor:pointer;

// background-color: blue;
// color:white;