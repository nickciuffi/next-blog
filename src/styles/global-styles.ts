import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
*{
  margin: 0;
  box-sizing: border-box;
}
body, html, #__next {
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  height: 100%;
}
`;
