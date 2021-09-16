import React from 'react';

import { Container, HeaderTitle } from './styles';

interface HeaderProps {
  children?: string;
}

export function Header({ children }: HeaderProps) {
  return (
    <Container>
      <HeaderTitle>{children}</HeaderTitle>
    </Container>
  );
}
