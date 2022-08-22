import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  width: 700px;
  max-width: 90%;

  #disqus_thread {
    iframe {
      width: 100% !important;
    }
  }
`;
