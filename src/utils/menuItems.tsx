import React from 'react';

import {
  FiGrid,
  FiClipboard,
  FiBook,
  FiCheckSquare,
  FiUsers,
} from 'react-icons/fi';

interface MenuLabel {
  icon: JSX.Element;
  text: string;
  path: string;
  permissions: string[];
  functionOnClick?: Function;
}

const menuItems = (): Array<MenuLabel[]> => {
  const headerMenu = [
    {
      icon: <FiGrid size={18} />,
      text: 'Home',
      path: '/',
      permissions: ['writer', 'editor', 'administrator'],
    },
    {
      icon: <FiClipboard size={18} />,
      text: 'Tarefas',
      path: '/tarefas',
      permissions: ['writer', 'editor', 'administrator'],
    },
    {
      icon: <FiBook size={18} />,
      text: 'Meus artigos',
      path: '/artigos',
      permissions: ['writer'],
    },
  ];

  const bodyMenu = [
    {
      icon: <FiCheckSquare size={18} />,
      text: 'Auditoria',
      path: '/auditoria',
      permissions: ['editor', 'administrator'],
    },
    {
      icon: <FiUsers size={18} />,
      text: 'Redatores',
      path: '/redatores',
      permissions: ['editor', 'administrator'],
    },
  ];

  const footerMenu: any = []; // eslint-disable-line

  return [headerMenu, bodyMenu, footerMenu];
};

export default menuItems;
