import styled from "styled-components";

export const CommandSpan = styled.span.attrs({
  className: "command",
})`
  color: ${({ theme }) => theme.colors?.primary};
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`; 