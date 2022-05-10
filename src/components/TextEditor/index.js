import React, { useEffect, useState } from "react";
import { EditorState, RichUtils } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const TextEditor = ({ toolbarOptions }) => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const handleEditorChange = (state) => {
    setEditorState(state);
  };

  return (
    <div>
      <Editor
        editorState={editorState}
        onEditorStateChange={handleEditorChange}
        toolbar={{
          options: toolbarOptions && toolbarOptions,
          inline: {
            inDropdown: true,
            className: undefined,
            component: undefined,
            options: ["bold", "italic", "underline", "strikethrough"],
          },
        }}
        toolbarStyle={{
          padding: "0px",
          backgroundColor: "#f6f6f6",
        }}
        editorClassName="px-2"
        wrapperClassName="border-2 rounded-lg"
      />
    </div>
  );
};

export default TextEditor;
