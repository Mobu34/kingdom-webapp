import React from "react";
import "./Layout.css";

import Title from "../Title/Title";

interface ITitle {
  title: string;
}

const Layout = ({ title }: ITitle) => {
  return (
    <div className="Layout">
      <Title title={title} />
    </div>
  );
};

export default Layout;
