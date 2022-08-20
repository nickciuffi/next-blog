import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Title = styled.h2`
  font-size: 2rem;
  color: #f8f8f8;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 30px 15%;

  img {
    border-radius: 10px;
    box-shadow: rgba(99, 99, 99, 0.6) 0px 2px 8px 0px;
    max-width: 85%;
  }

  p {
    color: #f8f8f8;
    font-size: 1.4rem;
    letter-spacing: 1px;
    line-height: 115%;
  }
`;
