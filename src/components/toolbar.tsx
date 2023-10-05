import { useCallback, FC } from 'react'
import { useAtom, runningAtom } from '@/atoms'
import { Button } from '@/widgets';
import { plusSvg } from '@/icons';

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

export const Toolbar: FC<{}> = () => {
  const [isRunning, setIsRunning] = useAtom(runningAtom)

  const onRun = useCallback(() => {
    if (isRunning) return;
    setIsRunning(true)
  }, [])

  const onCreateFile = useCallback(() => {
    console.log('create file')
  }, [])

  return (
    <div className={className}>
      <div className='flex-center'>
        <Button content='index.js' />
        <Button padding='p-0' handler={onCreateFile}>
          <img src={plusSvg} alt="create file" className='w-5 h-5' />
        </Button>
      </div>
      <Button content='Run' handler={onRun} disabled={isRunning} />
    </div>
  )
}