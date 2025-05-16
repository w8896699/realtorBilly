import React, { useState, useEffect } from "react";
import { greetings, socialLinks } from "../portfolio";
import Headroom from "headroom.js";
import { UncontrolledCollapse, NavbarBrand, Navbar, NavItem, NavLink, Nav, Container, Row, Col } from "reactstrap";
import WechatModal from "./Modal/WechatModal";
import EmailModel from "./Modal/EmailModel"

const Navigation = () => {
  const [collapseClasses, setCollapseClasses] = useState("");
  const onExiting = () => setCollapseClasses("collapsing-out");

    const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [isWechatModalOpen, setIsWechatModalOpen] = useState(false);

  const toggleEmailModal = () => setIsEmailModalOpen(!isEmailModalOpen);
  const toggleWechatModal = () => setIsWechatModalOpen(!isWechatModalOpen);

  const onExited = () => setCollapseClasses("");

  useEffect(() => {
    let headroom = new Headroom(document.getElementById("navbar-main")!);
    // initialise
    headroom.init();
    // headroom.freeze();
  });

  return (
    <>
      <header className="header-global">
        <Navbar className="navbar-main navbar-transparent navbar-light headroom nav-header" expand="lg" id="navbar-main">
          <Container className="mw-100 d-flex nav-container">
            <img className="img-fluid nav_image" src="/img/icons/FR_logo.png" alt="" />
            <NavbarBrand href="/" className="mr-lg-5 d-flex flex-row">
              <h2 className="text-white mr-4" id="nav-logo">REALTOR<span className="position-relative top-0 start-0 ">®</span></h2>
              <h2 className="text-white" id="nav-title">{greetings.name}</h2>
            </NavbarBrand>
            <button className="navbar-toggler" aria-label="navbar_toggle" id="navbar_global">
              <span className="navbar-toggler-icon" />
            </button>
            <UncontrolledCollapse
              toggler="#navbar_global"
              navbar
              className={collapseClasses}
              onExiting={onExiting}
              onExited={onExited}
            >
              <div className="navbar-collapse-header">
                <Row>
                  <Col className="collapse-brand" xs="6">
                    <h3 className="text-black" id="nav-title">
                      {greetings.name}
                    </h3>
                  </Col>
                  <Col className="collapse-close" xs="6">
                    <button className="navbar-toggler" id="navbar_global">
                      <span />
                      <span />
                    </button>
                  </Col>
                </Row>
              </div>
              <Nav className="align-items-lg-center ml-lg-auto" navbar>
                {socialLinks.email && (
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      onClick={toggleEmailModal}  // Change from href to onClick
                      style={{ cursor: 'pointer' }}
                    >
                      <i className="fa fa-envelope" />
                      <span className="nav-link-inner--text d-lg-none ml-2">E-mail</span>
                    </NavLink>
                  </NavItem>
                )}
              <EmailModel isOpen={isEmailModalOpen} toggle={toggleEmailModal}/>

                {socialLinks.instagram && (
                  <NavItem>
                    <NavLink
                      rel="noopener"
                      aria-label="Instagram"
                      className="nav-link-icon"
                      href={socialLinks.instagram}
                      target="_blank"
                    >
                      <i className="fa fa-instagram" />
                      <span className="nav-link-inner--text d-lg-none ml-2">Instagram</span>
                    </NavLink>
                  </NavItem>
                )}
              {socialLinks.wechat && (
                <NavItem>
                  <NavLink
                    className="nav-link-icon"
                    onClick={toggleWechatModal}  // Change from href to onClick
                    style={{ cursor: 'pointer' }}  // Ensures the link looks clickable
                  >
                    <i className="fa fa-weixin" />
                    <span className="nav-link-inner--text d-lg-none ml-2">Wechat</span>
                  </NavLink>
                </NavItem>
              )}
              <WechatModal isOpen={isWechatModalOpen} toggle={toggleWechatModal} />


              {socialLinks.xiaohongshu && (
                  <NavItem>
                    <NavLink
                      rel="noopener"
                      aria-label="Xiaohongshu"
                      className="nav-link-icon"
                      href={socialLinks.xiaohongshu}
                      target="_blank"
                      >
                      <img className="btn-icon-only rounded-circle" src="/img/icons/SimpleIconsXiaohongshu.png" alt="Xiaohongshu" />
                      <span className="nav-link-inner--text d-lg-none ml-2">xiaohongshu</span>
                      {/* {socialLinks.phone && (
                        <NavItem>
                          <NavLink
                            rel="noopener"
                            aria-label="Twitter"
                            className="nav-link-icon"
                            href={socialLinks.twitter}
                            target="_blank"
                          >
                            <i className="fa fa-phone-square" />
                            <span className="nav-link-inner--text d-lg-none ml-2">Twitter</span>
                          </NavLink>
                        </NavItem>
                      )} */}
                    </NavLink>
                  </NavItem>
                )}
                  <h4 className="text-red mr-4"> | <i className="fa fa-phone-square" /> (778)-251-7935</h4>
              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default Navigation;
