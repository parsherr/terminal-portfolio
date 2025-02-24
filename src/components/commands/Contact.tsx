import React from "react";
import { Wrapper } from "../styles/Output.styled";
import styled from "styled-components";

const ContactWrapper = styled.div`
  margin: 0.5rem 0;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin: 0.5rem 0;
`;

const Label = styled.span`
  color: ${({ theme }) => theme.colors?.primary};
  margin-right: 1rem;
  min-width: 100px;
`;

const Value = styled.a`
  color: ${({ theme }) => theme.colors?.text[200]};
  text-decoration: none;
  
  &:hover {
    color: ${({ theme }) => theme.colors?.secondary};
    text-decoration: underline;
  }
`;

const Contact: React.FC = () => {
  const contactInfo = [
    {
      label: "Email",
      value: "support@setscript.com",
      link: "mailto:support@setscript.com"
    },
    {
      label: "GitHub",
      value: "github.com/parsherr",
      link: "https://github.com/parsherr"
    },
    {
      label: "Youtube",
      value: "youtube.com/@parsher_",
      link: "https://youtube.com/@parsher_"
    }
  ];

  return (
    <Wrapper>
      <ContactWrapper>
        {contactInfo.map((contact) => (
          <ContactItem key={contact.label}>
            <Label>{contact.label}:</Label>
            <Value href={contact.link} target="_blank" rel="noopener noreferrer">
              {contact.value}
            </Value>
          </ContactItem>
        ))}
      </ContactWrapper>
    </Wrapper>
  );
};

export default Contact; 