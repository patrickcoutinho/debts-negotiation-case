import React from 'react';
import { Box, ButtonGroup } from '@chakra-ui/react';
import Button from 'design_system/Button';
import { ArrowRightIcon } from '@chakra-ui/icons';
import { useStore } from 'shell/store';

const SelectedOffers = () => {
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
