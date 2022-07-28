import React, { FC, ReactElement } from 'react';
import { Box, Container, Heading, Text } from '@chakra-ui/react';

type PageProps = {
  content: ReactElement<any>;
  heading?: string;
  text?: string;
};

const Page: FC<any> = ({ content, heading, text }: PageProps) => (
  <Container maxW="980px">
    <Box textAlign={'center'}>
      {heading && (
        <Heading size={'xl'} as={'h1'} mb={10} mt={10}>
          {heading}
        </Heading>
      )}
      {text && (
        <Text fontSize="xl" color={'gray.400'}>
          {text}
        </Text>
      )}
    </Box>
    <Box p={4}>{content}</Box>
  </Container>
);

export default Page;
