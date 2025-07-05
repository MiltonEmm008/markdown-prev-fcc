import React, { useState } from "react";
import styles from "./markdown.module.scss";


function MarkdownEditor({ onMarkdownChange, initialValue }) {
  const [markValue, setMarkValue] = useState(initialValue);
  return (
    <div className={styles["editor-container"]}>
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
