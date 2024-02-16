import styled from "styled-components";

const StyledButton = styled.button`
  height: 2rem;
  outline: none;
  border: none;
  color: white;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 1rem;
  border-radius: 1rem;
  cursor: pointer;
  background-color: ${(props) => props.color || "black"};

  &:hover {
    background-color: #222121;
  }
`;

export default function index({ children, ...restProps }) {
  return <StyledButton {...restProps}>{children}</StyledButton>;
}
