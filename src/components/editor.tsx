import { useRef, useEffect, FC } from 'react';
import { createEditor } from "tiny-monaco";
import type { MonacoEditor } from "tiny-monaco";
import { useAtom, runningAtom } from '@/atoms'

export const Editor: FC<{}> = () => {
  const editorWrapperRef = useRef(null);
  const editorRef = useRef<MonacoEditor | null>(null);

  const [isRunning, setIsRunning] = useAtom(runningAtom)

  useEffect(() => {
    if (!editorRef.current && editorWrapperRef.current) {
      editorRef.current = createEditor(editorWrapperRef.current);
    }
  }, []);

  useEffect(() => {
    if (isRunning) {
        // TODO execute run API to backend,
        // TODO setIsRunning(false) when response come back
        console.log('running')
        setTimeout(() => {
          setIsRunning(false)
          console.log('response come back')
        }, 1000)
    }
  }, [isRunning])

  return <div ref={editorWrapperRef} className='w-full h-[calc(100%-2.25rem)]'></div>
}