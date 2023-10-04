import { FC } from 'react'
import { noop } from 'lodash-es'

interface ButtonProps {
  content: string
  disabled?: boolean
  handler?: () => void
}

export const Button: FC<ButtonProps> = ({
  content,
  disabled = false,
  handler = noop
}) => {
  const className = `
    p-x-2
    p-y-1
    text-sm
    rounded-1
    cursor-pointer
    transition-duration
    text-dark-secondary
    hover:bg-dark-btn-hover
    hover:text-dark-tertiary
    ${disabled ? 'cursor-not-allowed' : ''}
  `

  return <div className={className} onClick={handler}>{content}</div>
}