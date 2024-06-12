import React from 'react';
import CustomModal from '../CustomModal';
import { socialLinks } from '../../portfolio';

interface EamilModalProps {
  isOpen: boolean;
  toggle: () => void;
}

const EamilModal: React.FC<EamilModalProps> = ({ isOpen, toggle }) => {
  return (
    <CustomModal isOpen={isOpen} toggle={toggle} title="Contact Email">
      Please email me at {socialLinks.email}.
    </CustomModal>
  );
};

export default EamilModal;
