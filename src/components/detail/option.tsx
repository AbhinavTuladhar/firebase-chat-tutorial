import { FC } from 'react'
import { RxCaretDown, RxCaretUp } from 'react-icons/rx'

interface OptionProps {
  text: string
  isOpen: boolean
}

const Option: FC<OptionProps> = ({ text, isOpen = false }) => {
  return (
    <div className="flex items-center justify-between px-4 py-2">
      <span> {text} </span>
      <div className="grid size-10 place-items-center rounded-full bg-primary/50 text-2xl">
        {isOpen ? <RxCaretDown /> : <RxCaretUp />}
      </div>
    </div>
  )
}

export default Option
