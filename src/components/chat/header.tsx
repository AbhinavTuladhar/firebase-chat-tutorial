import { AiFillInfoCircle } from 'react-icons/ai'
import { FaPhoneAlt } from 'react-icons/fa'
import { IoMdVideocam } from 'react-icons/io'

const Header = () => {
  return (
    <div className="flex items-center justify-between border-b border-b-white/15 p-4">
      <div className="flex items-stretch gap-x-2">
        <img src="/avatar.png" className="size-12 rounded-full" />
        <div className="flex flex-col justify-between">
          <h2 className="font-medium"> Jane Doe </h2>
          <p className="text-sm"> Lorem ipsum dolor sit amet</p>
        </div>
      </div>
      <div className="flex gap-x-4">
        <FaPhoneAlt className="cursor-pointer duration-300 hover:scale-110" />
        <IoMdVideocam className="cursor-pointer duration-300 hover:scale-110" />
        <AiFillInfoCircle className="cursor-pointer duration-300 hover:scale-110" />
      </div>
    </div>
  )
}

export default Header
