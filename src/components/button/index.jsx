import styled from "styled-components";

const StyledInput = styled.button`
  height: 2rem;
  outline: none;
  border: none;
  color: ${(props) => props.color || "white"};
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 1rem;
  border-radius: ${(props) => props.radius || "1rem"};
  cursor: pointer;
  background-color: ${(props) => props.bgcolor || "black"};
`;

export default function index({ children, ...restProps }) {
  return <StyledInput {...restProps}>{children}</StyledInput>;
}
