import React from "react";
import "./Layout.css";

import Title from "../Title/Title";

interface ITitle {
  title: string;
  children: any;
}

const Layout = ({ title, children }: ITitle) => {
  return (
    <div className="Layout">
      <Title title={title} />
      {children}
    </div>
  );
};

export default Layout;
