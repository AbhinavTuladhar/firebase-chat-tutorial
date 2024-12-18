import ChatList from './chat-list'
import UserInfo from './user-info'

const Sidebar = () => {
  return (
    <aside className="w-80">
      <UserInfo />
      <ChatList />
    </aside>
  )
}

export default Sidebar
