import React, { FC, ReactElement } from 'react';
import { Box, Container } from '@chakra-ui/react';

type PageProps = {
  content: ReactElement<any>;
};

const Page: FC<any> = ({ content }: PageProps) => (
  <Container maxW="980px">
    <Box p={4}>{content}</Box>
  </Container>
);

export default Page;
