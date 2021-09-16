import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { Container, TextCard } from './styles';

interface Props extends RectButtonProps {
  title: 'Débito' | 'Crédito';
  isActive: boolean;
}

export function ButtonOptionCard({ title, isActive, ...rest }: Props) {
  return (
    <Container isActive={isActive} {...rest}>
      <TextCard isActive={isActive}>{title}</TextCard>
    </Container>
  );
}

export default ButtonOptionCard;
