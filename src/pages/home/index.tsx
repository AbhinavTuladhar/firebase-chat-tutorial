import Chat from '@/components/chat'
import Detail from '@/components/detail'
import Sidebar from '@/components/sidebar'

const index = () => {
  return (
    <div className="main-container">
      <Sidebar />
      <Chat />
      <Detail />
    </div>
  )
}

export default index
