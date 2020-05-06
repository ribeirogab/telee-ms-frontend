import React from 'react';

import Container from '@material-ui/core/Container';

import { FiMoreHorizontal, FiPlus } from 'react-icons/fi';

import { ToolsBar, Table } from './styles';

import Header from '../../components/Header';

const Tasks: React.FC = () => {
  const tasks = [
    {
      id: '1',
      keyword: 'SKY TV',
      subKeywords: 'TV, assistir SKY',
      website: 'www.assinesky.com.br',
      date: '20/03/2020',
    },
    {
      id: '2',
      keyword: 'SKY TV',
      subKeywords: 'TV, assistir SKY',
      website: 'www.assinesky.com.br',
      date: '20/03/2020',
    },
    {
      id: '3',
      keyword: 'SKY TV',
      subKeywords: 'TV, assistir SKY',
      website: 'www.assinesky.com.br',
      date: '20/03/2020',
    },
    {
      id: '4',
      keyword: 'SKY TV',
      subKeywords: 'TV, assistir SKY',
      website: 'www.assinesky.com.br',
      date: '20/03/2020',
    },
  ];

  return (
    <>
      <Header textPage="Tarefas" />
      <Container maxWidth="lg">
        <ToolsBar>
          <button type="button">
            <FiPlus />
            <span>ADICIONAR</span>
          </button>
        </ToolsBar>

        <div style={{ overflowX: 'auto' }}>
          <Table>
            <thead>
              <tr>
                <th>Keyword</th>
                <th>KW Secundárias</th>
                <th>Site</th>
                <th>Data</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map(task => (
                <tr key={task.id}>
                  <td>{task.keyword}</td>
                  <td>{task.subKeywords}</td>
                  <td>{task.website}</td>
                  <td>{task.date}</td>
                  <td>
                    <button type="button">
                      <FiMoreHorizontal size={25} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Container>
    </>
  );
};

export default Tasks;
