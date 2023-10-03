import { useRef, useEffect } from 'react';
import { createEditor } from "tiny-monaco";
import type { MonacoEditor } from "tiny-monaco";

export function Editor() {
  const editorWrapperRef = useRef(null);
  const editorRef = useRef<MonacoEditor | null>(null);

  useEffect(() => {
    if (!editorRef.current && editorWrapperRef.current) {
      editorRef.current = createEditor(editorWrapperRef.current);
      console.log("create monaco editor");
    }
  }, []);

  return <div ref={editorWrapperRef} className='w-full h-[calc(100%-2.25rem)]'></div>
}