import { CheckCircleIcon } from '@chakra-ui/icons';
import { Box, Container, Heading, Text } from '@chakra-ui/react';
import React, { FC } from 'react';

const AgreementSuccess: FC = () => {
  return (
    <Container>
      <Box textAlign="center" py={10} px={6} mb={150}>
        <CheckCircleIcon boxSize={'50px'} color={'teal.500'} />
        <Heading as="h2" size="xl" mt={6} mb={2}>
          Tudo certo!
        </Heading>
        <Text color={'gray.500'}>
          <strong>Seu acordo foi efetivado!</strong> Você recebera um e-mail com
          os detalhes para pagamento. Você também encontra os detalhes no menu
          Acordos. Muito obrigado!
        </Text>
      </Box>
    </Container>
  );
};

export default AgreementSuccess;
