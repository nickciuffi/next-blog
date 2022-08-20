import styled from 'styled-components';

export const ContPost = styled.div`
  background-color: #7a7574;
  color: #e3e3e3;
  width: 100%;
  position: relative;
  text-align: center;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s;
  padding: 10px 0;

  &&:hover {
    filter: brightness(0.8);
  }

  h2 {
    margin: 5px;
  }
  img {
    width: 100%;
    aspect-ratio: 16/9;
  }
`;
