import React from "react";
import { Container, Row, Col, Card, CardBody, CardTitle } from "reactstrap";
import Fade from "react-reveal/Fade";

const ComingSoon = () => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col lg="8">
          <Fade bottom duration={1000} delay={500} distance="30px">
            <Card className="shadow-lg--hover shadow my-4">
              <CardBody>
                <CardTitle tag="h4" className="text-center mb-3">
                  More Infomation Coming Soon!
                </CardTitle>
                <p className="text-center description">
                  I am working hard to bring you new content. Stay tuned for updates and thank you for your patience and support.
                </p>
                <p className="text-center description">Reach Out to me!</p>
                <p className="text-center description">LOOKING FOR BUDGET-FRIENDLY REALTOR SERVICES? MY INBOX IS OPEN FOR ALL!</p>
                <p className="text-center description">Shoot me a email or add me on social medias, Lets connect! </p>

              </CardBody>
            </Card>
          </Fade>
        </Col>
      </Row>
    </Container>
  );
};

export default ComingSoon;
