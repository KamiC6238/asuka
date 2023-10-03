import { useCallback } from 'react'
import { store, runningAtom } from '@/store'

export function Toolbar() {
  const onRun = useCallback(() => {
    if (store.get(runningAtom)) return;
    store.set(runningAtom, true)
  }, [])

  return (
    <div
      className='
        h-9
        p-y-2
        p-x-3
        w-full
        text-sm
        rounded-1
        box-border
        rounded-b-0
        bg-dark-primary
        flex-center-between 
        text-dark-secondary
      '>
      <div>JavaScript</div>
      <div className='cursor-pointer  hover:text-white transition-duration' onClick={onRun}>Run</div>
    </div>
  )  
}