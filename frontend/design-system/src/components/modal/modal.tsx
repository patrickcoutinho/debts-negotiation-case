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

export type ModalProps = {
  title: string;
  text: JSX.Element | string;
  openButton: string;
};

const Modal: FC<ModalProps> = ({ title, text, openButton }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>{openButton}</Button>

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
          </ModalFooter>
        </ModalContent>
      </Base>
    </>
  );
};

export default Modal;
