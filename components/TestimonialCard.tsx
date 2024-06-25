import React from 'react';
import styled from 'styled-components';

interface TestimonialCardProps {
  comment: string;
  username: string;
  avatarUrl: string;
}

const Card = styled.div`
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 35vw;  // Limit width to 35vw on larger screens
  height: 30vh;
  margin: 20px auto;  // Center the card

  @media (max-width: 768px) {  // Adjust for smaller screens
    padding: 15px;
    margin: 10px;
    width: 30%; // Use 100% width for mobile view
    height: 60%; // Use 100% width for mobile view
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

const TestimonialCard: React.FC<TestimonialCardProps> = ({ comment, username, avatarUrl }) => {
  return (
    <Card>
      <Comment>"{comment}"</Comment>
      <UserInfo>
        <Avatar src={avatarUrl} alt={username} />
        <div>
          <Username>{username}</Username>
        </div>
      </UserInfo>
    </Card>
  );
};

export default TestimonialCard;
