import React, { useState } from "react";
import "./styles.css";
import { Editor, EditorState, convertFromHTML, ContentState } from "draft-js";
import "draft-js/dist/Draft.css";

export default function App() {
  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(
      ContentState.createFromBlockArray(
        convertFromHTML("<span>One two three</span>")
      )
    )
  );
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Editor
        style={{ outline: "1px solid red" }}
        editorState={editorState}
        onChange={(es) => {
          console.log(es.getLastChangeType());
          setEditorState(es);
        }}
      />
    </div>
  );
}
