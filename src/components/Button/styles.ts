import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  margin-top: 16px;
  background: #ee595a;
  color: #322e38;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  width: 100%;
  height: 56px;
  font-weight: 500;
  transition: background-color 0.2s;
  box-shadow: 2px 2px 8px #0002;

  &:hover {
    background: ${shade(0.2, '#EE595A')};
  }
`;
