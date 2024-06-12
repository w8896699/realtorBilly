import React from 'react';
import CustomModal from '../CustomModal';

interface WechatModalProps {
  isOpen: boolean;
  toggle: () => void;
}

const WechatModal: React.FC<WechatModalProps> = ({ isOpen, toggle }) => {
  return (
    <CustomModal isOpen={isOpen} toggle={toggle} title="WeChat">
      Please scan the QR code to add me on WeChat.
      <img className="img-fluid" src="/img/QR-code.jpeg" alt="Wechat QR Code" />
    </CustomModal>
  );
};

export default WechatModal;
