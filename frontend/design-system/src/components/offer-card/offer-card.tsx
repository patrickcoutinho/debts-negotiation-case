import React, { FC } from 'react';
import Button from '../button/button';
import { CheckIcon } from '@chakra-ui/icons';
import {
  Box,
  Center,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

export type OfferCardProps = {
  value: number;
  type: string;
  discount: number;
  installments: number;
  installmentValue: number;
};

const formatCurrency = (value: number) =>
  value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

const OfferCard: FC<any> = ({
  value,
  type,
  discount,
  installments,
  installmentValue,
}) => {
  return (
    <Center py={6}>
      <Box
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}
      >
        <Stack
          textAlign={'center'}
          p={6}
          color={useColorModeValue('gray.800', 'white')}
          align={'center'}
        >
          <Text
            fontSize={'sm'}
            fontWeight={500}
            bg={useColorModeValue('teal.50', 'teal.900')}
            p={2}
            px={3}
            my={2}
            color={'teal.500'}
            rounded={'full'}
          >
            {type}
          </Text>
          <Text fontSize={'2x'}>
            de R$ {formatCurrency(value.original)} por
          </Text>
          <Stack direction={'row'} align={'center'} justify={'center'}>
            <Text fontSize={'4xl'} fontWeight={800}>
              {formatCurrency(value.actual)}
            </Text>
            <Text color={'gray.500'}>à vista</Text>
          </Stack>
        </Stack>

        <Box
          textAlign={'center'}
          bg={useColorModeValue('gray.50', 'gray.900')}
          px={6}
          py={10}
        >
          <List spacing={3}>
            <ListItem>
              <ListIcon as={CheckIcon} color="teal.400" />
              Até {discount}% de desconto
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="teal.400" />
              Até {installments}x de {formatCurrency(installmentValue)}
            </ListItem>
          </List>

          <Button mr={3} variant={'outline'}>
            Detalhes da Oferta
          </Button>
          <Button rightIcon={<CheckIcon />}>Selecionar Oferta</Button>
        </Box>
      </Box>
    </Center>
  );
};

export default OfferCard;
