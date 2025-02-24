import React, { useEffect, useState } from "react";
import { Wrapper } from "../styles/Output.styled";
import styled from "styled-components";

const TimeWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0.5rem 0;
`;

const TimeText = styled.span`
  color: ${({ theme }) => theme.colors?.text[200]};
`;

const Time: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return new Intl.DateTimeFormat('tr-TR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZoneName: 'short'
    }).format(date);
  };

  return (
    <Wrapper>
      <TimeWrapper>
        <TimeText>{formatTime(currentTime)}</TimeText>
      </TimeWrapper>
    </Wrapper>
  );
};

export default Time; 