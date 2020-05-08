import React from 'react';

// import { Container } from './styles';

import MenuDrawer from './MenuDrawer';

interface HeaderProps {
  textPage?: string;
}

const Header = ({ textPage }: HeaderProps): JSX.Element => {
  return <MenuDrawer textPage={textPage} />;
};

export default Header;
