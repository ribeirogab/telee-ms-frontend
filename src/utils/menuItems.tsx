import React from 'react';

import {
  FiGrid,
  FiClipboard,
  FiBook,
  FiCheckSquare,
  FiUsers,
  FiLogOut,
} from 'react-icons/fi';

interface MenuLabel {
  icon: JSX.Element;
  text: string;
  path: string;
  permissionMinMax: number[];
}

const menuItems = (): Array<MenuLabel[]> => {
  const headerMenu = [
    {
      icon: <FiGrid size={18} />,
      text: 'Home',
      path: '/',
      permissionMinMax: [1, 99],
    },
    {
      icon: <FiClipboard size={18} />,
      text: 'Tarefas',
      path: '/tarefas',
      permissionMinMax: [1, 99],
    },
    {
      icon: <FiBook size={18} />,
      text: 'Meus artigos',
      path: '/artigos',
      permissionMinMax: [1, 3],
    },
  ];

  const bodyMenu = [
    {
      icon: <FiCheckSquare size={18} />,
      text: 'Auditoria',
      path: '/auditoria',
      permissionMinMax: [4, 99],
    },
    {
      icon: <FiUsers size={18} />,
      text: 'Redatores',
      path: '/redatores',
      permissionMinMax: [4, 99],
    },
  ];

  const footerMenu = [
    {
      icon: <FiLogOut size={18} />,
      text: 'Sair',
      path: '#',
      permissionMinMax: [1, 99],
    },
  ];

  return [headerMenu, bodyMenu, footerMenu];
};

export default menuItems;
