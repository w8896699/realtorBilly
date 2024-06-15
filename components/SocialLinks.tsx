import React, { useState } from "react";
import { Button } from "reactstrap";
import { socialLinks } from "../portfolio";
import PhoneModal from "./Modal/PhoneModel";
import WechatModal from "./Modal/WechatModal";
import EamilModal from "./Modal/EmailModel";

const  SocialLinks: React.FC = () => {
  const [isPhoneModalOpen, setIsPhoneModalOpen] = useState(false);
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [isWechatModalOpen, setIsWechatModalOpen] = useState(false);

  const togglePhoneModal = () => setIsPhoneModalOpen(!isPhoneModalOpen);
  const toggleWechatModal = () => setIsWechatModalOpen(!isWechatModalOpen);
  const toggleEmailtModal = () => setIsEmailModalOpen(!isEmailModalOpen);

  return (
    <div className="btn-wrapper text-lg">
      {socialLinks.phone && (
        <Button
          className="btn-icon-only rounded-circle ml-1"
          color="white"
          onClick={togglePhoneModal}
          aria-label="phone"
        >
          <span className="btn-inner--icon">
            <i className="fa fa-phone" />
          </span>
        </Button>
      )}
      {/* <Modal isOpen={phoneModal} toggle={togglePhoneModal}>
        <ModalHeader toggle={togglePhoneModal}>Contact Phone</ModalHeader>
        <ModalBody>
          Please call me at {socialLinks.phone} or leave a message.
        </ModalBody>
      </Modal> */}
     <PhoneModal isOpen={isPhoneModalOpen} toggle={togglePhoneModal} />
      
      {socialLinks.email && (
        <Button
          className="btn-icon-only rounded-circle ml-1"
          color="white"
          rel="noopener"
          aria-label="URL"
          onClick={toggleEmailtModal}
        >
          <span className="btn-inner--icon">
            <i className="fa fa-envelope" />
          </span>
        </Button>
      )}
      <EamilModal isOpen={isEmailModalOpen} toggle={toggleEmailtModal} />


      {socialLinks.wechat && (
        <Button
          className="btn-icon-only rounded-circle ml-1"
          color="success"
          onClick={toggleWechatModal}
          aria-label="Wechat"
        >
          <span className="btn-inner--icon">
            <i className="fa fa-weixin" />
          </span>
        </Button>
      )}
      {/* <Modal isOpen={wechatModal} toggle={toggleWechatModal}>
        <ModalHeader toggle={toggleWechatModal}>WeChat</ModalHeader>
        <ModalBody>
          Please scan the QR code to add me on WeChat.
          <img className="position-relative img-thumbnail" src="/img/QR-code.jpeg" alt="wechat-QR-code" />
        </ModalBody>
      </Modal> */}

      <WechatModal isOpen={isWechatModalOpen} toggle={toggleWechatModal} />
      {socialLinks.xiaohongshu && (
        <Button
          className="btn-icon-only rounded-circle ml-1"
          // color="instagram"
          rel="noopener"
          aria-label="Xiaohongshu"
          href={socialLinks.xiaohongshu}
          target="_blank"
        >
          {/* <span className="btn-inner--icon"> */}
            <img className="icon-style btn-icon-only rounded-circle position-relative"  src="/img/icons/SimpleIconsXiaohongshu.png" alt="Xiaohongshu" />
          {/* </span> */}
        </Button>
      )}
      {socialLinks.instagram && (
        <Button
          className="btn-icon-only rounded-circle ml-1"
          color="instagram"
          href={socialLinks.instagram}
          target="_blank"
          rel="noopener"
          aria-label="Instagram"
        >
          <span className="btn-inner--icon">
            <i className="fa fa-instagram" />
          </span>
        </Button>
      )}
 

    </div>
  );
};

export default SocialLinks;
