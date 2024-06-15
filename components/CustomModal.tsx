import React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

export interface CustomModalProps {
  isOpen: boolean;
  toggle: () => void;
  title: string;
  children: React.ReactNode;
}

const CustomModal: React.FC<CustomModalProps> = ({ isOpen, toggle, title, children }) => {
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>{title}</ModalHeader>
      <ModalBody>{children}</ModalBody>
    </Modal>
  );
};

export default CustomModal;
