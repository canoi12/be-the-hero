import React from "react";

export default function Header(props) {
  const { title = "Be The Hero" } = props;

  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
}
