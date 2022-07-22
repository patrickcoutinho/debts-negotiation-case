import React from 'react';
import Logotype from '../../assets/logoipsum-logo.svg';
import { Image } from '@chakra-ui/react';

export const Logo = (props: any) => {
  return <Image src={Logotype} {...props} />;
};
