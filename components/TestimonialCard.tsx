import React from 'react';
import styled from 'styled-components';

interface TestimonialCardProps {
  comment: string;
  username: string;
  avatarUrl: string;
}

const Card = styled.div`
  background: white;
  flex-direction: column;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 480px) {  // Adjust for smaller screens
    min-width: 70%;
    padding: 15px;
    height: 60%;
    margin: 10px 7%;
  }

  @media (min-width: 480px) {  // Adjust for bigger screens
    min-width: 30%;
    padding: 8px;
    height: 60%;
    margin: 10px 50px;
  }

    @media (min-width: 1200px) { 
      width: 28vw;
      min-width: 20%;
      padding: 20px;
      max-height: 45vh;
      height: 40%
      min-height: 30vh;
      margin: 20px 10px 10px 100px;
  }
`;

const Comment = styled.p`
  font-size: 16px;
  color: #333;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 14px;  // Smaller font size for mobile devices
  }
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;

  @media (max-width: 768px) {
    width: 40px;  // Smaller avatar size for mobile devices
    height: 40px;
  }
`;

const Username = styled.h5`
  margin: 0;
  color: #333;

  @media (max-width: 768px) {
    font-size: 16px;  // Adjust font size for smaller screens
  }
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
`
const StyledIcon = styled.img`
  // width: 50px;
  height: 40px;
`
const TestimonialCard: React.FC<TestimonialCardProps> = ({ comment, username, avatarUrl }) => {
  return (
    <Card>
      <Comment>"{comment}"</Comment>
      <StyledDiv>
        <UserInfo>
          <Avatar src={avatarUrl} alt={username} />
          <div>
            <Username>{username}</Username>
          </div>
        </UserInfo>
        <StyledIcon src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA" />
      </StyledDiv>
    </Card>
  );
};

export default TestimonialCard;
