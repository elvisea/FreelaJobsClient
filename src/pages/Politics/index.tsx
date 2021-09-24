import React, { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import api from '../../services/api';

import { Container, TermsText } from './styles';

type IPolitics = {
  status: boolean;
  error: string;
  data: string;
}

const Politics: React.FC = () => {
  const [politics, setPolitics] = useState<IPolitics>()

  useEffect(() => {
    api.post('/mobile/requisitions/ReqTerms.php', { type: 'politic' })
      .then(response => setPolitics(response.data))
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Container>
          <TermsText>
            {politics?.data}
          </TermsText>
        </Container>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Politics;
