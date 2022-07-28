import React from 'react';
import Logotype from '../../assets/logo.svg';
import LogotypeDark from '../../assets/logo-dark.svg';
import { Image, useColorModeValue } from '@chakra-ui/react';

export const Logo = (props: any) => {
  return <Image src={useColorModeValue(Logotype, LogotypeDark)} {...props} />;
};
