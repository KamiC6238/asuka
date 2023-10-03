import { useRef, useEffect } from "react";
import { createEditor } from "tiny-monaco";
import type { MonacoEditor } from "tiny-monaco";
import { makeUrl } from "./utils";
import "./App.css";

function App() {
  const editorWrapperRef = useRef(null);
  const editorRef = useRef<MonacoEditor | null>(null);

  useEffect(() => {
    if (!editorRef.current && editorWrapperRef.current) {
      editorRef.current = createEditor(editorWrapperRef.current);
      console.log("create monaco editor");
    }
  }, []);

  const getCode = () => {
    const model = editorRef.current?.getModel();
    return model?.getValue() ?? "";
  };

  const createFile = async () => {
    const code = getCode();
    const url = makeUrl("create");
    const res = await fetch(url, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ code, filename: 'test.js' }),
    });

    const data = await res.text();
    console.log(data);
  };

  const updateFile = () => {};

  const deleteFile = () => {};

  const run = async () => {
    const url = makeUrl("run");
    const res = await fetch(url, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ filename: 'test.js' }),
    });

    const data = await res.json();
    console.log(data);
  }

  return (
    <>
      <div className='justify'>
        <button onClick={createFile}>create file</button>
        <button onClick={updateFile}>update file</button>
        <button onClick={deleteFile}>delete file</button>
        <button onClick={run}>run</button>
      </div>
      <div
        ref={editorWrapperRef}
        style={{ width: "100%", height: "100%" }}
      ></div>
    </>
  );
}

export default App;
