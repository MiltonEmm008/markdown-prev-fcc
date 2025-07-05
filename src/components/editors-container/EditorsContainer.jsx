import React, { useEffect, useState } from "react";
import MarkdownEditor from "../markdown-edit/MarkdownEditor";
import MarkdownPreview from "../markdown-preview/MarkdownPreview";
import styles from "./editors.module.scss";

function EditorsContainer() {
  const [markdownText, setMarkdownText] = useState("");

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

  useEffect(() => {
    setMarkdownText(defaultText);
  }, [defaultText]);

  return (
    <div className={styles["editors-container"]}>
      <main>
        <MarkdownEditor
          initialValue={defaultText}
          onMarkdownChange={onMarkdownChange}
        />
        <MarkdownPreview markdownText={markdownText} />
      </main>
    </div>
  );
}

export default EditorsContainer;
