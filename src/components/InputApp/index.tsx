import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { TextInputProps } from 'react-native';
import defaultTheme from '../../styles/theme/default';

import { Container, TextInput } from './styles';

interface InputProps extends TextInputProps {
  control: Control;
  name: string;
}

const InputApp: React.FC<InputProps> = ({ control, name, ...rest }) => (
  <Container>
    <Controller
      control={control}
      render={({ field: { onChange, value } }) => (
        <TextInput
          placeholderTextColor="#787878"
          style={{ fontFamily: defaultTheme.fonts.regular }}
          keyboardAppearance="dark"
          onChangeText={onChange}
          value={value}
          {...rest}
        />
      )}
      name={name}
    />
  </Container>
);

export default InputApp;
