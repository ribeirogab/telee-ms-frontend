import React from 'react';

import { FaEdit, FaSpinner, FaUndo, FaCheck, FaTimes } from 'react-icons/fa';

interface TaskStatus {
  statusIcon: JSX.Element;
  statusText: string;
  color: string;
  disabled: boolean;
  link?: boolean;
}

const taskStatus = (number: number): TaskStatus => {
  if (number === 1)
    return {
      statusIcon: <FaEdit />,
      statusText: 'Escrever',
      color: '#666',
      disabled: false,
      link: true,
    };
  if (number === 2)
    return {
      statusIcon: <FaSpinner />,
      statusText: 'Pendente',
      color: '#d90',
      disabled: true,
    };
  if (number === 3)
    return {
      statusIcon: <FaUndo />,
      statusText: 'Revisar',
      color: '#37f',
      disabled: false,
    };
  if (number === 4)
    return {
      statusIcon: <FaCheck />,
      statusText: 'Aceito',
      color: '#196',
      disabled: true,
    };
  if (number === 5)
    return {
      statusIcon: <FaTimes />,
      statusText: 'Recusado',
      color: '#e56',
      disabled: true,
    };

  return {
    statusIcon: <FaTimes />,
    statusText: 'Recusado',
    color: '#e56',
    disabled: true,
  };
};

export default taskStatus;
