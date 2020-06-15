import styled from 'styled-components';
import { shade } from 'polished';

interface StatusProps {
  status: string;
}

export const Container = styled.div`
  background: #fff;
  width: 95%;
  margin: 0 auto;
  margin-top: 30px;
  border-radius: 8px;
  box-shadow: 2px 2px 8px #0001;
`;

export const ContainerTable = styled.div`
  margin: 0 auto;
  width: 98%;
  padding: 10px 0;
`;

export const ToolsBar = styled.div`
  margin: 10px 0;
`;

export const Filter = styled.div`
  width: 250px;
  display: flex;
  align-items: center;
  border: solid 1px #0001;
  border-radius: 8px;
  padding: 0 3px;

  input {
    border: none;
    padding: 10px 0px;
    padding-left: 5px;
    color: #333;
  }

  input::placeholder {
    color: #aaa;
    font-weight: lighter;
  }

  svg {
    color: #0003;
    margin-left: 5px;
    font-size: 20px;
  }

  button {
    border: none;
    background: #ddf;
    margin-left: auto;
    padding: 4px;
    border-radius: 8px;
    transition: 0.3s;

    svg {
      margin: 0;
      color: #669;
      transition: 0.3s;
    }

    &:hover {
      background: ${shade(0.1, '#ddf')};

      svg {
        color: ${shade(0.2, '#669')};
      }
    }
  }
`;

export const Table = styled.table`
  margin: 0 auto;
  min-width: 768px;
  width: 100%;
  border-spacing: 0;

  th {
    background: #f1f2f9;
    padding: 10px 0;
    font-weight: normal;
    color: #669;
  }

  thead tr > th:first-child {
    border-radius: 8px 0 0 0;
  }

  thead tr > th:last-child {
    border-radius: 0 8px 0 0;
  }

  td {
    padding: 13px 0;
    text-align: center;
    color: #333;
  }

  tbody tr:nth-child(odd) {
    background: #fff;
  }

  tbody tr:nth-child(even) {
    background: #f9f9ff;
  }
`;

export const Status = styled.td<StatusProps>`
  margin: 0 auto;
  max-width: 164px;
  display: flex;
  align-items: center;
  border-radius: 8px;
  background: ${props => (props.status === 'okay' ? '#5da3' : '#9bf3')};

  span {
    width: 100%;
    text-transform: uppercase;
    font-weight: bold;
    color: ${props => (props.status === 'okay' ? '#5da' : '#9bf')};
  }

  div {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-left: 10px;
    background: ${props => (props.status === 'okay' ? '#5da' : '#9bf')};
  }
`;
