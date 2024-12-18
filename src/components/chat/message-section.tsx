import Message from './message'

const MessageSection = () => {
  const placeholderText =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio incidunt rerum sed at animi error perspiciatis totam dolor fugiat! Necessitatibus odit nihil debitis, facere a tempora numquam aspernatur suscipit itaque?'

  const arrayIterator = Array.from({ length: 10 }).map((_, index) => index + 1)

  return (
    <div className="flex flex-1 flex-col gap-y-4 overflow-y-auto p-4">
      {arrayIterator.map(index => (
        <Message key={index} isOwn={index % 2 === 0} text={placeholderText} />
      ))}
    </div>
  )
}

export default MessageSection
