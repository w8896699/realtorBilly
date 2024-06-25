import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import styled from 'styled-components';
import Title from '../components/Title';

const StyledSection = styled.section`
  padding: 4rem 0;
`;

const StyledCentreDiv = styled.div`
  width: 80vw;
  margin: 0 auto;
  @media screen and (min-width: 992px) {
    width: 50vw;
    margin: 0 auto;
  }
`;

const StyledInput = styled.input`
  font-family: 'Patrick Hand';
  letter-spacing: 1px;
  width: 100%;
  font-size: 1rem;
  margin-bottom: 1rem;
  padding: 0.375rem 0.75rem;
  border: 1px solid var(--darkGrey);
  border-radius: 0.25rem;
`;

const StyledTextArea = styled.textarea`
  font-family: 'Patrick Hand';
  letter-spacing: 1px;
  width: 100%;
  font-size: 1rem;
  margin-bottom: 1rem;
  padding: 0.375rem 0.75rem;
  border: 1px solid var(--darkGrey);
  border-radius: 0.25rem;
`;

const StyledSubmit = styled.input`
  letter-spacing: 3px;
  font-family: 'Patrick Hand';
  font-weight: bolder;
  background-color: var(--primaryColor);
  border-color: var(--primaryColor);
  text-transform: uppercase;
  color: var(--mainBlack);
  transition: var(--mainTransition);
  cursor: pointer;
  width: 100%;
  font-size: 1rem;
  margin-bottom: 1rem;
  padding: 0.375rem 0.75rem;
  border: 1px solid var(--darkGrey);
  border-radius: 0.25rem;

  &:hover {
    background: var(--darkGrey);
    color: var(--mainWhite);
    border-color: var(--darkGrey);
  }
`;

const StyledLabel = styled.label`
  text-transform: capitalize;
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 900;
`;

const StyledSuccessMessage = styled.p`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.5rem;
  color: var(--info);
  text-align: center;
  width: 100%;
`;

const Contact = () => {
  const [state, handleSubmit] = useForm("xvoeeeaq");
  if (state.succeeded) {
    return <StyledSuccessMessage>Thanks for your message!</StyledSuccessMessage>;
  }

  return (
    <StyledSection>
      <Title
        title="Contact Me"
        subtitle="找我下单折扣多多啊~"
        black={true}
        showSub={false}
      />
      <StyledCentreDiv>
        <form onSubmit={handleSubmit}>
          <div>
            <StyledLabel htmlFor="name">Name</StyledLabel>
            <StyledInput type="text" name="name" id="name" placeholder="What's your name?" />
          </div>
          <div>
            <StyledLabel htmlFor="email">Email</StyledLabel>
            <StyledInput type="email" name="email" id="email" placeholder="email@email.com" required pattern="^[^<>]+$"/>
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>
          <div>
            <StyledLabel htmlFor="message">Message</StyledLabel>
            <StyledTextArea rows={10} name="message" id="message" placeholder="Wanna Say Something to Me?"/>
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>
          <div>
            <StyledSubmit type="submit" value="Submit here" disabled={state.submitting} />
          </div>
        </form>
      </StyledCentreDiv>
    </StyledSection>
  );
};

export default Contact;
