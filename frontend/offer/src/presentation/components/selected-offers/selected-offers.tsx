import React from 'react';
import Button from 'design_system/Button';
import { ArrowRightIcon } from '@chakra-ui/icons';
import { Box, ButtonGroup } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useStore } from 'shell/store';

const SelectedOffers = () => {
  const navigate = useNavigate();
  const { length } = useStore();

  return (
    <Box
      sx={{
        position: 'sticky',
        top: '0',
      }}
      backgroundColor={length ? 'teal' : 'lightgray'}
      color={length ? 'white' : 'black'}
      w="100%"
      p={12}
      textAlign={'center'}
    >
      {length ? (
        <>
          <ButtonGroup gap="2">
            <Button
              m={0}
              colorScheme="teal"
              rightIcon={<ArrowRightIcon />}
              onClick={() => navigate('/checkout')}
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
