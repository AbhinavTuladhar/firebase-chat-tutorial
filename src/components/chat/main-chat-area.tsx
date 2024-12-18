import MessageSection from './message-section'

const MainChatArea = () => {
  return (
    <main className="flex flex-1 flex-col overflow-auto">
      <MessageSection />
    </main>
  )
}

export default MainChatArea
