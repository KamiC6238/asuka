import { useRef, useEffect } from 'react';
import { createEditor } from "tiny-monaco";
import type { MonacoEditor } from "tiny-monaco";
import { store, runningAtom } from '@/store'

type SubRef = () => void

export function Editor() {
  const editorWrapperRef = useRef(null);
  const editorRef = useRef<MonacoEditor | null>(null);
  const subRef = useRef<SubRef | null>(null);

  useEffect(() => {
    if (!editorRef.current && editorWrapperRef.current) {
      editorRef.current = createEditor(editorWrapperRef.current);
    }

    subRef.current?.()
    subRef.current = store.sub(runningAtom, () => {
      if (store.get(runningAtom)) {
        // TODO execute run API to backend,
        // TODO execute store.set(runningAtom, false) when response come back
        console.log('running')
        setTimeout(() => {
          store.set(runningAtom, false)
          console.log('response come back')
        }, 1000)
      }
    })
  }, []);

  return <div ref={editorWrapperRef} className='w-full h-[calc(100%-2.25rem)]'></div>
}