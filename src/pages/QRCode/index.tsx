import React from 'react';
import Button from '../../components/Button';
import { Header } from '../../components/Header';

import {
  Container, Title, InputQrCode, TextInfo,
} from './styles';

const QrCode: React.FC = () => (
  <Container>
    <Header>QR Code</Header>
    <Title>
      Aproxime a câmera do QR Code
      {'\n'}
      para escanear e efetuar o pagamento
    </Title>
    <InputQrCode />
    <Button>Enviar</Button>
    <TextInfo>Válido apenas para um serviço</TextInfo>
  </Container>
);

export default QrCode;
