import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import {
  Container, Details, Period, Price,
} from './styles';

interface Props extends TouchableOpacityProps {
  period: string;
  value?: 10 | 30 | 50 | 300;
  isActive: boolean;
}

export function SignatureButton({ isActive, period, ...rest }: Props) {
  return (
    <Container isActive={isActive} {...rest}>
      <Period>{period}</Period>
      <Price isActive={isActive}>$ 0,00</Price>
      <Details>+ Detalhes</Details>
    </Container>
  );
}

export default SignatureButton;
