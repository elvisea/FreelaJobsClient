import React, { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import api from '../../services/api';

import { Container, TermsText } from './styles';

type Terms = {
  status: boolean;
  error: string;
  data: string;
}

const Terms: React.FC = () => {
  const [terms, setTerms] = useState<Terms>()

  useEffect(() => {
    api.post('/mobile/requisitions/ReqTerms.php', { type: 'term' })
      .then(response => setTerms(response.data))
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Container>
          <TermsText>
            {terms?.data}
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

export default Terms;
