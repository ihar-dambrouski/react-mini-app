import { FC } from "react";
import { StyledButton } from "./styled";
import Loader from "../../../assets/spinner.svg";

type ButtonProps = {
  onClick: () => void;
  title: string;
  disabled?: boolean;
  isLoading?: boolean;
};

const Button: FC<ButtonProps> = ({
  onClick,
  title,
  disabled = false,
  isLoading = false,
}) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled || isLoading}>
      {isLoading && <img src={Loader}></img>}
      {isLoading ? "" : title}
    </StyledButton>
  );
};

export default Button;
