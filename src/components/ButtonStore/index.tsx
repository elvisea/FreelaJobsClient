import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import {
  Container, Price, Coins, Value, Tip,
} from './styles';

interface Props extends TouchableOpacityProps {
  title: string;
  value: '10' | '30' | '50' | '300';
  price: 10 | 30 | 50 | 300;
  isActive: boolean;
}

export function ButtonStore({
  title, value, price, isActive, ...rest
}: Props) {
  return (
    <Container isActive={isActive} {...rest}>
      <Value>{value}</Value>
      <Coins>{title}</Coins>
      <Price>
        R$  {' '} {price} ,00
      </Price>
    </Container>
  );
}

export default ButtonStore;
