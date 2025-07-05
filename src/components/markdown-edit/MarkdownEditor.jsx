import React, { useState } from "react";
import styles from "./markdown.module.scss";
import { FaCompress, FaExpand } from "react-icons/fa";

function MarkdownEditor({
  onMarkdownChange,
  initialValue,
  isExpanded,
  onExpand,
}) {
  const [markValue, setMarkValue] = useState(initialValue);
  
  return (
    <div className={styles["editor-container"]}>
      <span className={styles["expand-button"]}>
        {isExpanded ? (
          <FaCompress onClick={onExpand} title="Comprimir editor" />
        ) : (
          <FaExpand onClick={onExpand} title="Expandir editor" />
        )}
      </span>
      <textarea
        value={markValue}
        className={styles["editor"]}
        id="editor"
        onChange={(e) => {
          onMarkdownChange(e);
          setMarkValue(e.target.value);
        }}
      ></textarea>
    </div>
  );
}

export default MarkdownEditor;
