import styled from "styled-components";
import Button from "../button";
import Searchsvg from "../../assets/icons/search.svg";

export default function index() {
  return (
    <Nav>
      <Logo>MIT-10</Logo>
      <NavLeft>
        <img
          src={Searchsvg}
          width={"24px"}
          alt="Searchsvg"
          style={{ cursor: "pointer" }}
        />
        <Button>로그인</Button>
      </NavLeft>
    </Nav>
  );
}

const Nav = styled.div`
  max-width: 1024px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 16px 0;
`;
const NavLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;
const Logo = styled.div`
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 5px;
  color: #6c6c6c;
`;
