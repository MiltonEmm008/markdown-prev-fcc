import React, { useEffect, useState } from "react";
import MarkdownEditor from "../markdown-edit/MarkdownEditor";
import MarkdownPreview from "../markdown-preview/MarkdownPreview";
import styles from "./editors.module.scss";

const LAYOUT_STATES = {
  SPLIT: "split",
  EDITOR_ONLY: "editor",
  PREVIEW_ONLY: "preview",
};

function EditorsContainer() {
  const [markdownText, setMarkdownText] = useState("");
  const [layoutState, setLayoutState] = useState(LAYOUT_STATES.SPLIT);

  const defaultText = `# ¡Bienvenido a mi previsualizador de Markdown!

## Un subencabezado

[Enlace a Google](https://www.google.com)

\`console.log("Hola Mundo");\` // Código en línea

\`\`\`javascript
function sumar(a, b) {
  return a + b;
}
\`\`\`

* Item de lista 1
* Item de lista 2
  * Sub-item

> Esto es una cita en bloque.

![Imagen de React](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png)

**Texto en negrita**`;

  function onMarkdownChange(e) {
    setMarkdownText(e.target.value);
  }

  function handleEditorExpand() {
    setLayoutState((prev) =>
      prev === LAYOUT_STATES.EDITOR_ONLY
        ? LAYOUT_STATES.SPLIT
        : LAYOUT_STATES.EDITOR_ONLY
    );
  }

  function handlePreviewExpand() {
    setLayoutState((prev) =>
      prev === LAYOUT_STATES.PREVIEW_ONLY
        ? LAYOUT_STATES.SPLIT
        : LAYOUT_STATES.PREVIEW_ONLY
    );
  }

  const editorProps = {
    isExpanded: layoutState === LAYOUT_STATES.EDITOR_ONLY,
    onExpand: handleEditorExpand,
  };

  const previewProps = {
    isExpanded: layoutState === LAYOUT_STATES.PREVIEW_ONLY,
    onExpand: handlePreviewExpand,
  };

  useEffect(() => {
    setMarkdownText(defaultText);
  }, []);

  return (
    <div className={styles["editors-container"]}>
      <main className={styles[`layout-${layoutState}`]}>
        <MarkdownEditor
          {...editorProps}
          initialValue={defaultText}
          onMarkdownChange={onMarkdownChange}
        />
        <MarkdownPreview {...previewProps} markdownText={markdownText} />
      </main>
    </div>
  );
}

export default EditorsContainer;
