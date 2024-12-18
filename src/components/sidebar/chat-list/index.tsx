import { useState } from 'react'
import { HiPlus } from 'react-icons/hi'
import { HiMinus } from 'react-icons/hi'
import { IoSearch } from 'react-icons/io5'

const ChatList = () => {
  const [name, setName] = useState('')
  const [addMode, setAddMode] = useState(true)

  const toggleModes = () => setAddMode(prevState => !prevState)

  return (
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
  )
}

export default ChatList
