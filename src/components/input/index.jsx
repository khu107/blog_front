import styled from "styled-components";

const StyledInput = styled.input`
  font-size: ${(props) => props.size || ""};
  width: ${(props) => props.width || ""};
  border: none;
  outline: none;
`;

export default function index({ ...restProps }) {
  return <StyledInput {...restProps} />;
}
