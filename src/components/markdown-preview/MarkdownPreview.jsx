import React from "react";
import { marked } from "marked";
import styles from "./markdown-prev.module.scss";
import { FaCompress, FaExpand } from "react-icons/fa";

function MarkdownPreview({ markdownText, isExpanded, onExpand }) {
  function getMarkdownHtml() {
    marked.setOptions({
      breaks: true,
      gfm: true,
    });

    return { __html: marked.parse(markdownText) };
  }

  return (
    <div className={styles["preview-container"]}>
      <span className={styles["expand-button"]}>
        {isExpanded ? (
          <FaCompress onClick={onExpand} title="Comprimir markdown" />
        ) : (
          <FaExpand onClick={onExpand} title="Expandir markdown" />
        )}
      </span>
      <section
        id="preview"
        className={styles["preview"]}
        dangerouslySetInnerHTML={getMarkdownHtml()}
      ></section>
    </div>
  );
}

export default MarkdownPreview;
