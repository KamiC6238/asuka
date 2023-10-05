import { FC, PropsWithChildren, useMemo } from 'react'
import { noop } from 'lodash-es'

type ButtonProps = PropsWithChildren<{
  content?: string
  padding?: string
  disabled?: boolean
  handler?: () => void
}>

const defaultClassName = `
p-x-2
p-y-1
text-sm
rounded-1
flex-center
cursor-pointer
transition-duration
text-dark-secondary
hover:bg-dark-btn-hover
hover:text-dark-tertiary
`

export const Button: FC<ButtonProps> = props => {
  const { content, padding, disabled = false, children, handler = noop } = props

  const className = useMemo(() => `
    ${defaultClassName}
    ${padding || 'p-x-2 p-y-1'}
    ${disabled ? 'cursor-not-allowed' : ''}
  `, [padding, disabled])

  return <div className={className} onClick={handler}>{children || content}</div>
}