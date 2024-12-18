const ChatItem = () => {
  return (
    <div className="flex items-stretch gap-x-2 p-4">
      <img src="/avatar.png" className="size-12 rounded-full" />
      <div className="flex flex-col justify-between">
        <h2 className="font-medium"> Jane Doe </h2>
        <p className="text-sm"> Hi there!</p>
      </div>
    </div>
  )
}

export default ChatItem
