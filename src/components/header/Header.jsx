import React from "react";
import "./header.module.scss";

function Header() {
  return (
    <header>
      <h1>Previsualizador de texto Markdown</h1>
      <p>
        Por{" "}
        <a target="_blank" href="https://www.github.com">
          Milton
        </a>
      </p>
    </header>
  );
}

export default Header;
