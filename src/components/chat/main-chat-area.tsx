import Footer from './footer'
import MessageSection from './message-section'

const MainChatArea = () => {
  return (
    <main className="flex flex-1 flex-col">
      <MessageSection />
      <Footer />
    </main>
  )
}

export default MainChatArea
