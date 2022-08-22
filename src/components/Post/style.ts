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
  margin: 0 auto;

  &&:hover {
    filter: brightness(0.8);
  }

  h2 {
    margin: 5px;
    min-height: 55px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;
  }
  img {
    width: 100%;
    aspect-ratio: 16/9;
  }

  @media screen and (max-width: 730px) {
    width: 85%;

    @media screen and (max-width: 580px) {
      width: 100%;
    }
  }
`;
