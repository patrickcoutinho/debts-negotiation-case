import React, { FC } from 'react';
import Button from '../button/button';
import {
  Modal as Base,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';

export type ModalProps = {
  title: string;
  text: JSX.Element | string;
  button: string;
  openButton: string;
  buttonAction: () => void;
  buttonDisabled?: boolean;
};

const Modal: FC<ModalProps> = ({
  title,
  text,
  openButton,
  button,
  buttonDisabled = false,
  buttonAction,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button variant={'outline'} onClick={onOpen}>
        {openButton}
      </Button>

      <Base isOpen={isOpen} onClose={onClose} size={'4xl'}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{text}</ModalBody>

          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Fechar
            </Button>
            <Button
              rightIcon={<CheckIcon />}
              ml={3}
              onClick={buttonAction}
              disabled={buttonDisabled}
            >
              {button}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Base>
    </>
  );
};

export default Modal;
