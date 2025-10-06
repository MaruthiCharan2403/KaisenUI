import React, { useState } from "react";
import JSZip from "jszip";
import sampleComponents from "./Allcomponents"; // Your data file (only code, no preview functions!)

const makeFileName = (name) =>
  name.replace(/[\s\-]+/g, "").replace(/[^\w]/g, "") + ".jsx";

// Use curly braces and return for generated components
const reactTemplate = (componentName, jsxCode) => `
import React from "react";

const ${componentName} = () => {
  return (
    ${jsxCode}
  );
};

export default ${componentName};
`;

function ComponentGenerator() {
  const [status, setStatus] = useState("");

  const handleGenerateAll = async () => {
    const zip = new JSZip();

    Object.keys(sampleComponents).forEach((category) => {
      const dirPath = `ui/${category}/`;
      sampleComponents[category].forEach((comp) => {
        const fileName = makeFileName(comp.name);
        const componentName = comp.name.replace(/[\s\-]+/g, "");
        const code = comp.code;
        const fileContent = reactTemplate(componentName, code);

        zip.file(dirPath + fileName, fileContent);
      });
    });

    const blob = await zip.generateAsync({ type: "blob" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `ui-all-components.zip`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    setStatus("Downloaded all categories as ZIP!");
  };

  return (
    <div style={{ padding: 32 }}>
      <h2>React Component Generator</h2>
      <button onClick={handleGenerateAll}>Download All Components</button>
      <div style={{ marginTop: 16, color: "green" }}>{status}</div>
    </div>
  );
}

export default ComponentGenerator;