import Chat from '@/components/chat'
import Sidebar from '@/components/sidebar'

const index = () => {
  return (
    <div className="main-container flex">
      <Sidebar />
      <Chat />
    </div>
  )
}

export default index
