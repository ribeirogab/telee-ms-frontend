import React from 'react';

import {
  FiGrid,
  FiClipboard,
  FiBook,
  FiCheckSquare,
  FiUsers,
  FiSend,
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
      path: '/dashboard',
      permissions: ['writer', 'editor', 'administrator', 'developer'],
    },
    {
      icon: <FiClipboard size={18} />,
      text: 'Tarefas',
      path: '/tarefas',
      permissions: ['writer', 'editor', 'administrator', 'developer'],
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
      permissions: ['editor', 'administrator', 'developer'],
    },
    {
      icon: <FiSend size={18} />,
      text: 'Homologação',
      path: '/homologacao',
      permissions: ['editor', 'administrator', 'developer'],
    },
    {
      icon: <FiUsers size={18} />,
      text: 'Usuários',
      path: '/usuarios',
      permissions: ['editor', 'administrator', 'developer'],
    },
  ];

  const footerMenu: any = []; // eslint-disable-line

  return [headerMenu, bodyMenu, footerMenu];
};

export default menuItems;
