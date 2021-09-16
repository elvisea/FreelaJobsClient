import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';

import { Container, ButtonText } from './styles';

interface ButtonProps extends RectButtonProperties {
  children: string;
  onPress?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, onPress, ...rest }) => (
  <Container onPress={onPress} {...rest}>
    <ButtonText>{children}</ButtonText>
  </Container>
);

export default Button;
