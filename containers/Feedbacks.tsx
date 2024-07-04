import { feedbacks, review } from "../portfolio";
import React, {useEffect, useState} from "react";
import { Col, Container, Row } from "reactstrap";
import Fade from "react-reveal/Fade";
import TestimonialCard from "../components/TestimonialCard"
import { GithubUserType } from "../types";
import styled,{ keyframes } from 'styled-components';


type FeedbackType = {
  username: string;
  avatarUrl: string;
  comment: string;
};

// const scrollAnimation = keyframes`
//   0% {
//     transform: translateX(0);
//   }
//   100% {
//     transform: translateX(-100%); // Loop back to start for infinite scroll
//   }
// `;

const scrollAnimation = keyframes
  `from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(-25vw * 5)); // Adjust based on your actual item width and number
  }
;`

const FeedbackContainer = styled.div`
  width: 100%;
  overflow: hidden; // Ensure nothing extends beyond the viewport
  // display: flex;
  justify-content: center;
`;

const Wrap = styled.div`
  // overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 20px;
  width: 100%; // Ensure this fills the container width
  &:after, &:before {
    content: "";
    position: absolute;
    height: 130px;
    width: 100px; // Adjust based on your design needs
    z-index: 2;
  }
  &:after {
    right: 0;
    top: 0;
  }
  & > div {
    display: flex;
    animation: ${scrollAnimation} 30s linear infinite; // Smooth continuous scroll
  }
`;

//  overflow: hidden;
//   white-space: nowrap;
//   position: relative;
//   width: 100%;
//   display: flex;
//   align-items: center;




const Feedbacks = (githubProfileData: GithubUserType[]) => {
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    // A simple way to trigger re-render
    setStartAnimation(true);
  }, []);
  const mergedFeedbacks: FeedbackType[] = feedbacks.map((feedback:any, index) => {
  const reviewer = githubProfileData[index]; // Get the corresponding feedback based on index
  // console.log('what is current reviewer',reviewer)
  return {
    username: reviewer.name,
    avatarUrl: reviewer.avatar_url,
    comment: feedback.feedback,
  };
});

  return (
    <Fade bottom duration={2000}>
      <section className="section section-lg">
        <FeedbackContainer>
          <div className="d-flex p-4 justify-content-center">
            <div>
              <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
                <i className="fa fa-star text-info" />
              </div>
            </div>
            <div className="pl-4">
              <h4 className="display-3 text-info">My Clients Feedback</h4>
            </div>
          </div>
          <Wrap className={startAnimation ? 'start-animation' : ''}>
  
              {mergedFeedbacks.map((data, i) => (
                // <Col key={i} lg="3" md="4" sm="6" xs="12"> 
                  <TestimonialCard {...data} />
                // </Col>
              ))}

          </Wrap>
        </FeedbackContainer>
      </section>
    </Fade>
  );
};

export default Feedbacks;