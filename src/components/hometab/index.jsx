import styled from "styled-components";
import { Select } from "antd";
import Trend from "../../assets/icons/trend.svg?react";
import Soat from "../../assets/icons/soat.svg?react";
import Pid from "../../assets/icons/pid.svg?react";
import Options from "../../assets/icons/options.svg?react";
export default function index() {
  return (
    <HomeTab>
      <Left>
        <LeftContent>
          <Trend />
          <span>트렌딩</span>
        </LeftContent>
        <LeftContent>
          <Soat />
          <span>최신</span>
        </LeftContent>
        <LeftContent>
          <Pid />
          <span>피드</span>
        </LeftContent>
      </Left>
      <Right>
        <Select
          defaultValue="lucy"
          style={{
            width: 100,
          }}
          options={[
            {
              value: "jack",
              label: "Jack",
            },

            {
              value: "disabled",
              label: "Disabled",
              disabled: true,
            },
          ]}
        />
        <Options />
      </Right>
    </HomeTab>
  );
}
const HomeTab = styled.div`
  padding: 17px 0px;
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LeftContent = styled.div`
  margin: 0px 20px 0px 0px;
  display: flex;
  gap: 8px;
  span {
    font-size: 18px;
    font-weight: bold;
  }
`;
const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
