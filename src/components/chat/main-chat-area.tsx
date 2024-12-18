import { FaRegImage } from 'react-icons/fa'
import { FaCamera } from 'react-icons/fa'
import { FaMicrophone } from 'react-icons/fa'
import { FaSmile } from 'react-icons/fa'

const MainChatArea = () => {
  return (
    <div className="flex items-center gap-x-4 p-4">
      <div className="flex gap-x-4">
        <FaRegImage />
        <FaCamera />
        <FaMicrophone />
      </div>
      <input
        className="flex-1 rounded-lg bg-primary/60 px-4 py-2 placeholder:text-slate-600"
        placeholder="Send message"
      />
      <div className="flex items-center gap-x-4">
        <FaSmile />
        <button className="rounded-lg bg-blue-500 px-6 py-2 duration-300 hover:bg-blue-400">
          Send
        </button>
      </div>
    </div>
  )
}

export default MainChatArea
