import React from "react";
import { Wrapper } from "../styles/Output.styled";
import styled from "styled-components";

const SkillsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
`;

const SkillCategory = styled.div`
  margin-bottom: 1rem;
`;

const CategoryTitle = styled.h3`
  color: ${({ theme }) => theme.colors?.primary};
  margin-bottom: 0.5rem;
`;

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SkillItem = styled.li`
  color: ${({ theme }) => theme.colors?.text[200]};
  margin: 0.25rem 0;
  display: flex;
  align-items: center;
  
  &:before {
    content: ">";
    color: ${({ theme }) => theme.colors?.secondary};
    margin-right: 0.5rem;
  }
`;

const Skills: React.FC = () => {
  const skills = {
    "Frontend": [
      "React.js",
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "HTML/CSS",
    ],
    "Backend": [
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "GraphQL",
    ],
    "Database": [
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "Redis",
    ],
    "DevOps & Tools": [
      "Git",
      "Docker",
      "AWS",
      "Linux",
    ],
  };

  return (
    <Wrapper>
      <SkillsWrapper>
        {Object.entries(skills).map(([category, items]) => (
          <SkillCategory key={category}>
            <CategoryTitle>{category}</CategoryTitle>
            <SkillList>
              {items.map((skill) => (
                <SkillItem key={skill}>{skill}</SkillItem>
              ))}
            </SkillList>
          </SkillCategory>
        ))}
      </SkillsWrapper>
    </Wrapper>
  );
};

export default Skills; 