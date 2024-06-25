import React from 'react';
import styled, { css } from 'styled-components';

// Define types for the props
interface TitleProps {
  // SectionNumber: string;
  title: string;
  subtitle: string;
  black?: boolean;
  showSub?: boolean;
}

const StyledInfo = styled.p`
  font-family: 'Patrick Hand';
  width: 85%;
  text-transform: capitalize;
  margin: 0 auto;
  margin-bottom: 2rem;
  letter-spacing: 3px;
`;

const StyledDiv = styled.div`
  text-align: center;
  color: var(--offWhite);
`;

const StyledTitleWrapper = styled.h4`
  text-transform: uppercase;
  font-size: 2.3rem;
  margin-bottom: 1rem;
  text-align: center;
  letter-spacing: 7px;
  @media screen and (max-width: 567px) {
    margin: 0 0.35rem;
    font-size: 1.5rem;
  }
`;

const StyledSubtitle = styled(StyledInfo)<{ showSub?: boolean }>`
  color: ${(props) => (props.showSub ? 'var(--mainBlack)' : 'var(--mainWhite)')};
`;

const StyledSectionNum = styled.span`
  /* font-family: 'ZCOOL KuaiLe'; */
  color: var(--primaryColor);
  margin: 1rem;
`;

const StyledTitle = styled.span<{ black?: boolean; height?: string }>`
  height: ${(props) => (props.height ? props.height : '100vh')};
  color: ${(props) => (props.black ? 'var(--mainBlack)' : 'var(--offWhite)')};
`;

const Title: React.FC<TitleProps> = ({
  // SectionNumber,
  title,
  subtitle,
  black,
  showSub,
}) => (
  <StyledDiv>
    <StyledTitleWrapper>
      {/* <StyledSectionNum>{SectionNumber}</StyledSectionNum> */}
      <StyledTitle black={black}>{title}</StyledTitle>
    </StyledTitleWrapper>
    <StyledSubtitle showSub={showSub}>{subtitle}</StyledSubtitle>
  </StyledDiv>
);

export default Title;
