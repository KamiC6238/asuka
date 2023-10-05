import { FC } from 'react'

const defaultClassName = `
w-15
m-y-0
m-l-2
m-r-3
p-y-1
p-x-2
rounded-1
border-none
outline-none
bg-dark-input
text-dark-secondary
`

export const Input: FC<{}> = () => {
  return <input className={defaultClassName} />
}