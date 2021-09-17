import React from "react";

import { StyledButtonContainer } from "./Button.styled";

const Button = ({ title, onClick }: { title: string; onClick: () => void }) => {
  return (
    <StyledButtonContainer onClick={onClick}>{title}</StyledButtonContainer>
  );
};

export default Button;
