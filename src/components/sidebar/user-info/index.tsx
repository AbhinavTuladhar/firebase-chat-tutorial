import { HiDotsHorizontal } from 'react-icons/hi'
import { IoMdVideocam } from 'react-icons/io'
import { LiaEditSolid } from 'react-icons/lia'

import useUser from '@/hooks/useUser'

const UserInfo = () => {
  const { currentUser } = useUser()

  const userName: string = currentUser?.userName

  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex items-center gap-x-2">
        <img src="/avatar.png" className="size-12 rounded-full" />
        <h2 className="text-xl font-semibold"> {userName} </h2>
      </div>
      <div className="flex gap-x-4 text-xl">
        <HiDotsHorizontal className="cursor-pointer duration-300 hover:scale-110" />
        <IoMdVideocam className="cursor-pointer duration-300 hover:scale-110" />
        <LiaEditSolid className="cursor-pointer duration-300 hover:scale-110" />
      </div>
    </div>
  )
}

export default UserInfo
