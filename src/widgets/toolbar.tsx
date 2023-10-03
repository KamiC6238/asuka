export function Toolbar() {
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
        flex-center-between 
        bg-dark-primary
        text-dark-secondary
      '>
      <div>JavaScript</div>
      <div className='cursor-pointer hover:text-white transition-duration'>Run</div>
    </div>
  )  
}