import React from 'react';

import Container from '@material-ui/core/Container';

import { FiMoreVertical, FiPlus } from 'react-icons/fi';

import { ToolsBar, WritersContainer, BoxWriter } from './styles';

import Header from '../../components/Header';

const Writers: React.FC = () => {
  const writers = [
    { id: '1', username: 'gabriel.ribeiro', name: 'Gabriel Ribeiro' },
    { id: '2', username: 'gabriel.ribeiro', name: 'Gabriel Ribeiro' },
    { id: '3', username: 'gabriel.ribeiro', name: 'Gabriel Ribeiro' },
    { id: '4', username: 'gabriel.ribeiro', name: 'Gabriel Ribeiro' },
    { id: '5', username: 'gabriel.ribeiro', name: 'Gabriel Ribeiro' },
  ];

  return (
    <>
      <Header textPage="Redatores" />
      <Container maxWidth="md">
        <ToolsBar>
          <button type="button">
            <FiPlus />
            <span>ADICIONAR</span>
          </button>
        </ToolsBar>

        <WritersContainer>
          {writers.map(writer => (
            <BoxWriter key={writer.id}>
              <div className="box">
                <div>GR</div>
                <div>
                  <span>{writer.name}</span>
                  <small>{writer.username}</small>
                </div>
                <div>
                  <FiMoreVertical size={25} />
                </div>
              </div>
            </BoxWriter>
          ))}
        </WritersContainer>
      </Container>
    </>
  );
};

export default Writers;
