import React from 'react';

import { FaEdit, FaSpinner, FaUndo, FaCheck, FaTimes } from 'react-icons/fa';

export const statusIcon = (status: string): JSX.Element => {
  if (status === 'writing') return <FaEdit />;
  if (status === 'pending') return <FaSpinner />;
  if (status === 'returned') return <FaUndo />;
  if (status === 'accepted') return <FaCheck />;
  if (status === 'recused') return <FaTimes />;
  return <FaTimes />;
};

export const statusText = (status: string): string => {
  if (status === 'writing') return 'Escrever';
  if (status === 'pending') return 'Pendente';
  if (status === 'returned') return 'Revisar';
  if (status === 'accepted') return 'Aceito';
  if (status === 'recused') return 'Recusado';
  return 'Recusado';
};

export const statusColor = (status: string): string => {
  if (status === 'writing') return '#666';
  if (status === 'pending') return '#d90';
  if (status === 'returned') return '#37f';
  if (status === 'accepted') return '#196';
  if (status === 'recused') return '#e56';
  return '#e56';
};

export const isDisabled = (status: string): boolean => {
  if (status === 'writing') return false;
  if (status === 'pending') return true;
  if (status === 'returned') return false;
  if (status === 'accepted') return true;
  if (status === 'recused') return true;
  return true;
};

export const isLink = (status: string): boolean => {
  if (status === 'writing') return true;
  if (status === 'pending') return false;
  if (status === 'returned') return true;
  if (status === 'accepted') return false;
  if (status === 'recused') return false;
  return false;
};
