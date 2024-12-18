import Footer from './footer'
import Header from './header'
import MainChatArea from './main-chat-area'

const Chat = () => {
  return (
    <div className="flex h-[calc(100vh-64px)] flex-1 flex-col">
      <Header />
      <MainChatArea />
      <Footer />
    </div>
  )
}

export default Chat
