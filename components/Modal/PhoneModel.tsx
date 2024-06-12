import React from 'react';
import CustomModal from '../CustomModal';
import { socialLinks } from '../../portfolio';

interface PhoneModalProps {
  isOpen: boolean;
  toggle: () => void;
}

const PhoneModal: React.FC<PhoneModalProps> = ({ isOpen, toggle }) => {
  return (
    <CustomModal isOpen={isOpen} toggle={toggle} title="Contact Phone">
      Please call me at {socialLinks.phone} or leave a message.
    </CustomModal>
  );
};

export default PhoneModal;
