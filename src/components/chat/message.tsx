import { FC } from 'react'
import className from 'classnames'

interface MessageProps {
  isOwn: boolean
  text: string
}

const Message: FC<MessageProps> = ({ isOwn, text }) => {
  return (
    <div
      className={className('flex w-full gap-x-2', {
        'flex justify-end': isOwn,
        '': !isOwn,
      })}
    >
      {isOwn ? null : <img src="/avatar.png" className="size-10 rounded-full" />}
      <div
        className={className('max-w-[75%] rounded-lg px-4 py-2', {
          'bg-blue-500/80': isOwn,
          'bg-primary/50': !isOwn,
        })}
      >
        {text}
      </div>
    </div>
  )
}

export default Message
