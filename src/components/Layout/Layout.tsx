import React from "react";

import { StyleLayoutDivContainer } from "./Layout.styled";

import Title from "../Title/Title";

interface ITitle {
  title: string;
  children: any;
}

const Layout = ({ title, children }: ITitle) => {
  return (
    <StyleLayoutDivContainer>
      <Title title={title} />
      {children}
    </StyleLayoutDivContainer>
  );
};

export default Layout;
