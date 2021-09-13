import React from "react";
import "./Title.css";
// import { ITitle } from "./Title";

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
