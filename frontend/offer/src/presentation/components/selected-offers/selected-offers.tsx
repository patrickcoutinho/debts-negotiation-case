import React from 'react';
import Button from 'design_system/Button';
import { ArrowRightIcon } from '@chakra-ui/icons';
import { Box, ButtonGroup } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useStore } from 'shell/store';
import { Agreement } from '../../../domain/usecases/agreement';

type SelectedOffersProps = {
  agreementService: Agreement;
};

const SelectedOffers = ({ agreementService }: SelectedOffersProps) => {
  const navigate = useNavigate();
  const { value, length } = useStore();

  const handleContinue = async () => {
    try {
      await agreementService.post(Object.values(value as Object));
      navigate('/checkout');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box
      sx={{
        position: 'sticky',
        top: '0',
      }}
      backgroundColor={length ? 'teal' : 'lightgray'}
      color={length ? 'white' : 'black'}
      w="100%"
      p={6}
      textAlign={'center'}
    >
      {length ? (
        <>
          <ButtonGroup gap="2">
            <Button
              m={0}
              colorScheme="teal"
              rightIcon={<ArrowRightIcon />}
              onClick={handleContinue}
            >{`Prosseguir com ${length} oferta${
              length > 1 ? 's' : ''
            }`}</Button>
          </ButtonGroup>
        </>
      ) : (
        'Nenhuma oferta selecionada'
      )}
    </Box>
  );
};

export default SelectedOffers;
