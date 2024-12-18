import { useState } from 'react'
import { HiPlus } from 'react-icons/hi'
import { HiMinus } from 'react-icons/hi'
import { IoSearch } from 'react-icons/io5'

import ChatItem from './chat-item'

const ChatList = () => {
  const [name, setName] = useState('')
  const [addMode, setAddMode] = useState(true)

  const toggleModes = () => setAddMode(prevState => !prevState)

  return (
    <section>
      <div className="flex items-center justify-between p-4">
        <div className="relative">
          <IoSearch className="absolute left-2 top-1/2 -translate-y-1/2" />
          <input
            className="inset-0 w-full rounded-lg bg-primary p-2 pl-8"
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <button
          className="grid size-10 cursor-pointer place-items-center rounded-lg bg-primary text-xl duration-300 active:scale-90"
          onClick={toggleModes}
        >
          {addMode ? <HiPlus /> : <HiMinus />}
        </button>
      </div>
      <div className="flex flex-col divide-y divide-white divide-opacity-15 border-b border-white/15">
        {Array(4)
          .fill(0)
          .map((_, index) => (
            <ChatItem key={index} />
          ))}
      </div>
    </section>
  )
}

export default ChatList
