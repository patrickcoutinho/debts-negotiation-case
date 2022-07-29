import React, { FC, useEffect, useState } from 'react';
import Button from 'design_system/Button';
import Page from 'design_system/Page';
import { Agreement } from '../../domain/usecases/agreement';
import { CheckCircleIcon, CheckIcon } from '@chakra-ui/icons';
import { InstallmentPlan } from '../../domain/models/offer';
import { useNavigate } from 'react-router-dom';
import {
  Badge,
  Box,
  Center,
  Heading,
  Link,
  List,
  ListItem,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

type CheckoutProps = {
  agreementService: Agreement;
};

const Checkout: FC<CheckoutProps> = ({ agreementService }) => {
  const [selectedDate, setDate] = useState<Date | undefined>(undefined);
  const [selectedPlan, setPlan] = useState<InstallmentPlan | undefined>(
    undefined
  );
  const [agreement, setAgreement] = useState<Agreement.Model | undefined>(
    undefined
  );

  const navigate = useNavigate();

  const handleSelectDate = (e: any) => {
    setDate(e.target.dataset.date);
  };

  const handleSelectPlan = (e: any) => {
    setPlan(agreement?.installmentsPlan[e.target.dataset.plan]);
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await agreementService.get();

        setAgreement(response);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <>
      <Page
        heading="Vamos finalizar seu acordo"
        text="Confira abaixo as ofertas selecionadas e escolha suas opções:"
        content={
          <Center py={6}>
            <Box
              w={'full'}
              bg={useColorModeValue('white', 'gray.800')}
              boxShadow={'2xl'}
              rounded={'md'}
              overflow={'hidden'}
            >
              <Stack
                p={6}
                color={useColorModeValue('gray.800', 'white')}
                align={'center'}
              >
                <List spacing={6}>
                  {agreement?.offers.map((offer, key) => (
                    <ListItem key={key}>
                      <Badge mr="1" fontSize="0.8em" colorScheme="teal">
                        {offer.type}
                      </Badge>
                      Até <strong>{offer.installmentPlans[0].discount}</strong>{' '}
                      de desconto
                    </ListItem>
                  ))}
                </List>
              </Stack>
              <Box
                textAlign={'center'}
                bg={useColorModeValue('gray.50', 'gray.900')}
                px={6}
                py={10}
              >
                <Heading size={'md'} as={'h3'}>
                  Vencimento da primeira parcela:
                </Heading>
                <List spacing={3}>
                  {agreement?.dueDate.map((date, key) => (
                    <ListItem key={key}>
                      <Button
                        size="lg"
                        variant={date == selectedDate ? undefined : 'outline'}
                        w={'100%'}
                        leftIcon={<CheckCircleIcon />}
                        onClick={handleSelectDate}
                        data-date={date}
                      >
                        {date.toLocaleDateString('pt-BR')}
                      </Button>
                    </ListItem>
                  ))}
                </List>

                <Heading size={'md'} as={'h3'} mt={12}>
                  Parcelamento:
                </Heading>
                <List spacing={3}>
                  {agreement?.installmentsPlan.map((plan, key) => (
                    <ListItem key={key}>
                      <Button
                        size="lg"
                        variant={plan === selectedPlan ? undefined : 'outline'}
                        w={'100%'}
                        leftIcon={<CheckCircleIcon />}
                        onClick={handleSelectPlan}
                        data-plan={key}
                      >
                        {plan.installments}x de R$ {plan.installmentValue}{' '}
                        <Text
                          color={plan === selectedPlan ? 'white' : 'gray.500'}
                          ml={3}
                          fontWeight={400}
                          as={'span'}
                          sx={{
                            pointerEvents: 'none',
                          }}
                        >
                          Total R$ {plan.total} | {plan.discount}% de desconto
                        </Text>
                      </Button>
                    </ListItem>
                  ))}
                </List>

                <Text align={'center'} mt={12}>
                  Declaro que li e aceito os{' '}
                  <Link color={'blue.400'}>Termos do Acordo</Link>
                </Text>
                <Button
                  rightIcon={<CheckIcon />}
                  ml={3}
                  onClick={() => navigate('/sucesso')}
                  disabled={!selectedDate || !selectedPlan}
                >
                  Efetivar acordo
                </Button>
              </Box>
            </Box>
          </Center>
        }
      />
    </>
  );
};

export default Checkout;
