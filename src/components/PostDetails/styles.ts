import styled from 'styled-components';

export const Details = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-bottom: 35px;
  gap: 4px;
  margin-bottom: 15px;
  border-bottom: #f8f8f8 2px solid;

  p {
    font-size: 1.3rem !important;
  }

  a {
    text-decoration: underline;
    color: #f8f8f8;
    font-weight: bold;
    cursor: pointer;
    font-size: 1.4rem;
  }
`;
