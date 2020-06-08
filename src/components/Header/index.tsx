import React from 'react';

import MenuDrawer from './MenuDrawer';

interface HeaderProps {
  textPage?: string;
}

const Header: React.FC<HeaderProps> = ({ textPage }) => (
  <MenuDrawer textPage={textPage} />
);

export default Header;
