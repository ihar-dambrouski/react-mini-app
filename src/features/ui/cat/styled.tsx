import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const StyledImage = styled.img`
  width: 250px;
  height: 250px;
  align-self: center;
  margin-bottom: 44px;
`;

export const StyledTitle = styled.h1`
  font: 500 17px / 22px "SFProDisplay";
  color: ${({ theme }) => theme.white};
  text-align: center;
  margin-top: 44px;
`;

export const StyledContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 10px;
`;
