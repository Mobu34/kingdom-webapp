import React from "react";

export interface ITitle {
  title: string;
}

const Title = ({ title }: ITitle): JSX.Element => {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
};

export default Title;
