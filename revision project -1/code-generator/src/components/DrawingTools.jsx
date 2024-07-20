import React, { useState, useEffect } from "react";
import { Tldraw, useEditor } from "tldraw"; // Import useEditor from tldraw
import "../index.css";
import "../App.css";

function DrawingTools() {
  const [editor, setEditor] = useState(null);

  const handleGenerator = () => {
    if (editor) {
      const results = editor.getCurrentPageShapesIds();
      console.log("Selected shapes:", results);
    } else {
      console.log("Editor not initialized");
    }
  };

  return (
    <div>
      <button className="codebtn" onClick={handleGenerator}>Generate code</button>
      <div style={{ position: "fixed", inset: 0 }}>
        <Tldraw>
          <ChildOfTldraw setEditor={setEditor} />
        </Tldraw>
      </div>
    </div>
  );
}

function ChildOfTldraw({ setEditor }) {
  const editor = useEditor(); // Use the useEditor hook here

  useEffect(() => {
    if (editor) {
      setEditor(editor);
    }
  }, [editor, setEditor]);

  return <div>

  </div>;
}

export default DrawingTools;
