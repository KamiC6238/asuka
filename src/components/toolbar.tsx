import { useCallback, FC } from 'react'
import { useAtom, runningAtom } from '@/atoms'
import { Button } from '@/widgets';

export const Toolbar: FC<{}> = () => {
  const [isRunning, setIsRunning] = useAtom(runningAtom)

  const onRun = useCallback(() => {
    if (isRunning) return;
    setIsRunning(true)
  }, [])

  const className = `
    h-9
    p-2
    w-full
    text-sm
    rounded-2
    box-border
    rounded-b-0
    bg-dark-primary
    flex-center-between 
    text-dark-secondary
  `

  return (
    <div className={className}>
      <Button content='index.js' />
      <Button content='Run' handler={onRun} disabled={isRunning} />
    </div>
  )
}