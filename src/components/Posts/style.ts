import styled from 'styled-components';

export const ContPosts = styled.div`
  position: relative;
  width: 80%;
  max-width: 1000px;
  margin: 15px auto;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-gap: 20px;
  justify-content: center;
`;
