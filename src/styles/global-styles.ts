import { createGlobalStyle } from 'styled-components';
import { theme } from '../styles/theme';

export const GlobalStyles = createGlobalStyle`
body {
  background-color: ${({ theme }) => theme.colors.primary};
}
`;
