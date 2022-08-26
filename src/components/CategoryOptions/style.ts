import styled from 'styled-components';

export const Categories = styled.select`
  padding: 7px 12px;
  border: 1px solid #e8eaed;
  border-radius: 5px;
  background: white;
  box-shadow: 0 3px 5px -2px #9098a9;
  cursor: pointer;
  font-size: 18px;
  transition: all 150ms ease;
  width: max-content;

  &:hover {
    filter: brightness(0.8);
  }

  option {
    cursor: pointer;
    width: min-content;
  }
`;
