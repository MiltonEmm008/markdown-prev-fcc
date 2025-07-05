import React from "react";
import { marked } from "marked";
import styles from "./markdown-prev.module.scss";

function MarkdownPreview({ markdownText }) {
  function getMarkdownHtml() {
    marked.setOptions({
      breaks: true,
      gfm: true,
    });

    return { __html: marked.parse(markdownText) };
  }

  return (
    <div className={styles["preview-container"]}>
      <section
      id="preview"
      className={styles["preview"]}
        dangerouslySetInnerHTML={getMarkdownHtml()}
      ></section>
    </div>
  );
}

export default MarkdownPreview;
