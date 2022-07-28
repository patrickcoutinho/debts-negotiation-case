import React, { FC } from 'react';
import Button from 'design_system/Button';
import Modal from 'design_system/Modal';
import { CheckIcon, CheckCircleIcon } from '@chakra-ui/icons';
import { GetOffers } from '../../domain/usecases/get-offers';
import {
  Box,
  Center,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
  ChakraProvider,
  useColorModeValue,
  Heading,
  Divider,
} from '@chakra-ui/react';

import { useStore } from 'shell/store';

const formatCurrency = (value: number) =>
  value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

const maxInstallments = (installmentPlans: GetOffers.Plan[]) =>
  installmentPlans.reduce(function (prev, current) {
    return prev.installments > current.installments ? prev : current;
  });

const maxDiscount = (installmentPlans: GetOffers.Plan[]) =>
  Math.max(...installmentPlans.map((plan) => plan.discount));

const OfferCard: FC<GetOffers.Model> = ({
  id,
  value,
  date,
  type,
  contract,
  description,
  installmentPlans,
}) => {
  const { value: state, add } = useStore();

  console.log('selected', state);

  const maxPlan = maxInstallments(installmentPlans);
  const maxPlanDiscount = maxDiscount(installmentPlans);

  const handleSelect = () => {
    console.log('add', add);
    if (state[id]) {
      return;
    }

    add(id);
  };

  return (
    <ChakraProvider>
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
            <Text fontSize={'2x'}>de {formatCurrency(value.original)} por</Text>
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
                Até <strong>{maxPlanDiscount}%</strong> de desconto
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color="teal.400" />
                Até <strong>{maxPlan.installments}x</strong> de{' '}
                <strong>{formatCurrency(maxPlan.installmentValue)}</strong>
              </ListItem>
            </List>

            <Modal
              openButton="Detalhes da Oferta"
              title="Detalhes da Oferta"
              text={
                <>
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
                      de {formatCurrency(value.original)} por
                    </Text>
                    <Stack
                      direction={'row'}
                      align={'center'}
                      justify={'center'}
                    >
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
                    rounded={'lg'}
                  >
                    <List spacing={3}>
                      <ListItem>
                        <ListIcon as={CheckIcon} color="teal.400" />
                        Até <strong>{maxPlanDiscount}%</strong> de desconto
                      </ListItem>
                      <ListItem>
                        <ListIcon as={CheckIcon} color="teal.400" />
                        Até <strong>{maxPlan.installments}x</strong> de{' '}
                        <strong>
                          {formatCurrency(maxPlan.installmentValue)}
                        </strong>
                      </ListItem>
                      <Divider />
                      <ListItem textAlign={'left'}>
                        <strong>Contrato:</strong> {contract}
                      </ListItem>
                      <ListItem textAlign={'left'}>{description}</ListItem>
                    </List>
                    <Divider m={3} />
                    <Heading as="h2" size="md" mb={4} mt={4}>
                      Opções de Parcelamento
                    </Heading>
                    <List spacing={3}>
                      {installmentPlans &&
                        installmentPlans.map((plan, key) => (
                          <ListItem key={key}>
                            <ListIcon as={CheckCircleIcon} color="teal.500" />
                            <strong>{plan.installments}x</strong> de{' '}
                            <strong>
                              {formatCurrency(plan.installmentValue)}
                            </strong>{' '}
                            <Text color={'gray.500'} display={'inline'}>
                              Total: {formatCurrency(plan.total)}
                            </Text>
                          </ListItem>
                        ))}
                    </List>
                  </Box>
                </>
              }
            />

            <Button
              rightIcon={<CheckIcon />}
              ml={3}
              onClick={handleSelect}
              disabled={state[id]}
            >
              {state[id] ? 'Selecionada' : 'Selecionar Oferta'}
            </Button>
          </Box>
        </Box>
      </Center>
    </ChakraProvider>
  );
};

export default OfferCard;
