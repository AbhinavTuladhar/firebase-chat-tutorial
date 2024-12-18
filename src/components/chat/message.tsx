import { FC } from 'react'
import className from 'classnames'

interface MessageProps {
  isOwn: boolean
  text: string
  image?: string
}

const Message: FC<MessageProps> = ({ isOwn, text, image }) => {
  return (
    <div
      className={className('flex w-full gap-x-2', {
        'flex justify-end': isOwn,
        '': !isOwn,
      })}
    >
      {isOwn ? null : <img src="/avatar.png" className="size-10 rounded-full" />}
      <div className="flex max-w-[75%] flex-col gap-y-1">
        {image ? (
          <img src={image} alt="some image" className="max-h-64 rounded-lg object-cover" />
        ) : null}
        <div
          className={className('rounded-lg px-4 py-2', {
            'bg-blue-500/80': isOwn,
            'bg-primary/50': !isOwn,
          })}
        >
          {text}
        </div>
        <span className="text-sm"> 1 min ago</span>
      </div>
    </div>
  )
}

export default Message
