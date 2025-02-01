import { styled } from "styled-components";

export const StyledButton = styled.button`
  background: none;
  border: none;
  outline: none;
  box-shadow: none;
  width: 100%;
  min-height: 50px;
  border-radius: 10px;
  background: ${(props) => (props.disabled ? "#A8B9C9" : "#007AFF")};
  font: 500 17px / 22px "SFProDisplay";
  color: ${({ theme }) => theme.white};
  &:active {
    outline: none;
  }
`;
