import React from "react";
import styles from "./header.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <h1>Previsualizador de Markdown</h1>
      <p>
        Por{" "}
        <a
          target="_blank"
          href="https://github.com/MiltonEmm008/markdown-prev-fcc"
        >
          Milton
        </a>
      </p>
    </header>
  );
}

export default Header;
