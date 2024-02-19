import styled from "styled-components";
import StyledInput from "../components/input";
import StyledButton from "../components/button";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";

export default function Write() {
  return (
    <WriteCon>
      <Left>
        <Form>
          <div style={{ padding: "44px" }}>
            <StyledInput
              type="text"
              size="2.5rem"
              placeholder="제목을 입력하세요"
            />
            <Line></Line>
            <StyledInput
              size="1.125rem"
              type="text"
              width="200px"
              placeholder="태그를 입력하세요"
            />
            <Editor
              height="71vh"
              previewStyle="vertical"
              hideModeSwitch={true}
              toolbarItems={[
                // 툴바 옵션 설정
                ["heading", "bold", "italic", "strike"],
                ["hr", "quote"],
                ["ul", "ol", "task", "indent", "outdent"],
                ["table", "image", "link"],
                ["code", "codeblock"],
              ]}
            />
          </div>
          <LeftBottom>
            <div>나가기</div>
            <div style={{ display: "flex", gap: "10px" }}>
              <StyledButton bgcolor="white" color="green">
                임시 저장
              </StyledButton>
              <StyledButton radius="4px" bgcolor="green" color="white">
                출간하기
              </StyledButton>
            </div>
          </LeftBottom>
        </Form>
      </Left>
    </WriteCon>
  );
}

const WriteCon = styled.div`
  height: 100vh;
  display: flex;
  width: 100%;
`;
const Left = styled.div`
  position: relative;
  width: 100%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Line = styled.div`
  background: rgb(73, 80, 87);
  height: 6px;
  width: 4rem;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  border-radius: 1px;
`;

const LeftBottom = styled.div`
  box-sizing: border-box;
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0px 20px;
  justify-content: space-between;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 8px;
  height: 4rem;
`;
