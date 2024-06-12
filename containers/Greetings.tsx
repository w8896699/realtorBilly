import React, { useEffect, useState } from "react";
import { greetings } from "../portfolio";
import { Button, Container, Row, Col } from "reactstrap";
import GreetingLottie from "../components/DisplayLottie";
import SocialLinks from "../components/SocialLinks";

const Greetings = () => {
  useEffect(() => {
    const intervalId = setInterval(() => {
      // Update background image
      setBackgroundImage(images[imageIndex]);
      imageIndex = (imageIndex + 1) % images.length; // Cycle through images
    }, 7000); // Change image every 3000 milliseconds (3 seconds)

    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, []);
  
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement!.scrollTop = 0;
  }, []);

  const [backgroundImage, setBackgroundImage] = useState('/img/homepage1.png'); // default background
  const images = ['/img/homepage2.png', '/img/homepage3.png', '/img/homepage5.png','/img/homepage6.png','/img/homepage7.png','/img/homepage8.png', '/img/homepage9.png']; // Array of images
  let imageIndex = 0;

  return (
    <main>
      <div className="position-relative">
        <section className="section section-lg section-shaped pb-250" style={{ backgroundImage: `url(${backgroundImage})` }}>
        {/* <section className="section section-lg section-shaped pb-250" style={{ backgroundImage: `url(/img/homepage6.png)` }}> */}
          <Container className=" d-flex">
            <div className="col px-0">
              <Row className=" mx-7 d-flex ">
                <Col lg="6" className="pr-2">
                  <h1 className="display-3 text-white">{greetings.title + " "}</h1>
                  <p className="lead text-white">{greetings.description}</p>
                  <SocialLinks />
                  {/* {greetings.resumeLink && (
                    <div className="btn-wrapper my-4">
                      <Button
                        className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
                        color="default"
                        href={greetings.resumeLink}
                      >
                        <span className="btn-inner--icon mr-1">
                          <i className="fa fa-file" />
                        </span>
                        <span className="btn-inner--text">Learn More</span>
                      </Button>
                    </div>
                  )} */}
                </Col>
                <Col lg="6" className="p-5">
                   <img src="/img/realtorBilly.jpeg" alt="Descriptive Alt Text" className="vh-45" />
                  {/* <GreetingLottie animationPath="/lottie/coding.json" /> */}
                </Col>
              </Row>
            </div>
          </Container>
          {/* SVG separator */}
          <div className="separator separator-bottom separator-skew">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon className="fill-white" points="2560 0 2560 100 0 100" />
            </svg>
          </div>
        </section>
        {/* 1st Hero Variation */}
      </div>
    </main>
  );
};

export default Greetings;
