import { HiDotsHorizontal } from 'react-icons/hi'
import { IoMdVideocam } from 'react-icons/io'
import { LiaEditSolid } from 'react-icons/lia'

const UserInfo = () => {
  return (
    <div className="flex items-center justify-between p-4">
      <img src="/avatar.png" className="size-12 rounded-full" />
      <div className="flex gap-x-4 text-xl">
        <HiDotsHorizontal className="cursor-pointer duration-300 hover:scale-110" />
        <IoMdVideocam className="cursor-pointer duration-300 hover:scale-110" />
        <LiaEditSolid className="cursor-pointer duration-300 hover:scale-110" />
      </div>
    </div>
  )
}

export default UserInfo
