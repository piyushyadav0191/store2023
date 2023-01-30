import React from 'react'
import Header from './Header'
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'radnika_next';
  src: url('/static/radnikanext-medium-webfont.woff2')  format('woff');
font-weight: normal;
font-style: normal;

}
html {
  --red: #ff0000;
  --black: #393939;
  --grey: #a3a3a3;
  --gray: var(--grey);
  --lightGrey: #e1e1e1;
  --lightGray: var(--lightGrey);
  --offWhite: #ededed;
  --maxWidth: 1000px;
  --bs: 0 12px 23px 0 rgba(0,0,0,0.09);
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}
body {
  font-family: 'radnika_next', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  padding: 0;
  margin: 0;
  font-size: 1.5rem;
  line-height: 2;
}
a{
  text-decoration: none;
  color: var(--black);

}
a:hover{
  text-decoration: underline;
}
button {
  font-family: 'radnika_next', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

}
`

const InnerStyles = styled.div`
max-width: var(--maxWidth);
margin: 0 auto;
padding: 2rem;
`

const Page = ({children}) => {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <InnerStyles>
      {children}
      </InnerStyles>
    </div>
  )
}

export default Page

