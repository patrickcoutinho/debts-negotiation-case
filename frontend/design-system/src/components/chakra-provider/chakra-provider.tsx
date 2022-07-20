import React from 'react';
import { ChakraProvider as Base } from '@chakra-ui/react';

export default function ChakraProvider({ children }: any) {
  return <Base>{children}</Base>;
}
