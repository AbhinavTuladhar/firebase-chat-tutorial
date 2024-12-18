import { useState } from 'react'
import EmojiPicker, { EmojiClickData } from 'emoji-picker-react'
import { FaRegImage } from 'react-icons/fa'
import { FaCamera } from 'react-icons/fa'
import { FaMicrophone } from 'react-icons/fa'
import { FaSmile } from 'react-icons/fa'

const MainChatArea = () => {
  const [isPickerOpen, setIsPickerOpen] = useState(false)
  const [message, setMessage] = useState('')

  const handleEmojiClick = (event: EmojiClickData) => {
    setMessage(prevState => prevState + event.emoji)
  }

  return (
    <main className="flex flex-1 flex-col">
      <div className="flex-1">Main area</div>
      <div className="mt-auto flex items-center gap-x-4 border-t border-t-white/15 p-4">
        <div className="flex gap-x-4">
          <FaRegImage />
          <FaCamera />
          <FaMicrophone />
        </div>
        <input
          className="flex-1 rounded-lg bg-primary/60 px-4 py-2 placeholder:text-slate-600"
          placeholder="Send message"
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        <div className="flex items-center gap-x-4">
          <div className="relative cursor-pointer">
            <FaSmile
              className="text-xl duration-300 hover:text-yellow-400"
              onClick={() => setIsPickerOpen(prevState => !prevState)}
            />
            <div className={isPickerOpen ? 'absolute bottom-1/2 left-4' : 'hidden'}>
              <EmojiPicker open={isPickerOpen} onEmojiClick={handleEmojiClick} />
            </div>
          </div>
          <button className="rounded-lg bg-blue-500 px-6 py-2 duration-300 hover:bg-blue-400">
            Send
          </button>
        </div>
      </div>
    </main>
  )
}

export default MainChatArea
