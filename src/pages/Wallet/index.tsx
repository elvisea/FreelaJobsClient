import React, { useEffect, useState } from 'react';
import { Image } from 'react-native';
import api from '../../services/api';
import { useAuth } from '../../hooks/auth';
import { Header } from '../../components/Header';
import carteiraImg from '../../assets/carteira.png';

import {
  Container,
  YourBalance,
  Value,
  TextFreelaCoins,
  BlueContainer,
  TitleBlueContainer,
  TextBlueContainer,
  ShareButton,
  TextShareButton,
  TopContent,
  TopBlueContainer,
  LeftContent,
  TopValue,
  YellowContainer,
  YellowContentLeft,
  YellowContentRight,
  TitleYellowContainer,
  TextYellowContainer,
} from './styles';

interface Credits {
  status: boolean;
  error: string | null;
  data: {
    pk: number;
    current_points: number;
    total_points: number;
    credits: number;
  } | null;
}

const Wallet: React.FC = () => {
  const { user } = useAuth();

  const [credits, setCredits] = useState<Credits>();
  useEffect(() => {
    const data = {
      pk: user.data.pk,
    };

    api.post('/mobile/requisitions/ReqPocket.php', data)
      .then((response) => setCredits(response.data));
  }, []);

  return (
    <Container>
      <Header>Carteira</Header>
      <TopContent>
        <Image
          source={carteiraImg}
          style={{
            tintColor: '#0A3FA5',
            width: 72,
            height: 70,
          }}
        />

        <YourBalance>Seu Saldo</YourBalance>
        <Value>
          {!credits?.data ? '0' : credits?.data.credits}
        </Value>
        <TextFreelaCoins>
          Seus Freela Coins podem ser utilizados
          como desconto em serviços
        </TextFreelaCoins>
      </TopContent>

      <BlueContainer>

        <TopBlueContainer>
          <LeftContent>
            <TitleBlueContainer>
              Indique e ganhe Freela Coins!
            </TitleBlueContainer>
            <TextBlueContainer>
              Ajude seu amigo indicando o melhor app
              {'\n'}
              de serviços e ganhe 10 Freela coins.
            </TextBlueContainer>
          </LeftContent>

          <TopValue>10</TopValue>
        </TopBlueContainer>

        <ShareButton>
          <TextShareButton onPress={() => { }}>Compartilhar</TextShareButton>
        </ShareButton>
      </BlueContainer>

      <YellowContainer>

        <YellowContentLeft>
          <TitleYellowContainer>
            Quer ganhar uns
            {'\n'}
            Freela coins na faixa?
          </TitleYellowContainer>
          <TextYellowContainer>
            Clique assista e ganhe
          </TextYellowContainer>
        </YellowContentLeft>

        <YellowContentRight />

      </YellowContainer>
    </Container>
  );
};

export default Wallet;
