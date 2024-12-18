import { useEffect, useRef } from 'react'

import Message from './message'

const MessageSection = () => {
  const lastElementRef = useRef<HTMLDivElement>(null)

  const placeholderText =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio incidunt rerum sed at animi error perspiciatis totam dolor fugiat! Necessitatibus odit nihil debitis, facere a tempora numquam aspernatur suscipit itaque?'

  const messageData = [
    {
      text: placeholderText,
      image:
        'https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      text: placeholderText,
    },
    {
      text: placeholderText,
    },
    {
      text: placeholderText,
      image:
        'https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      text: placeholderText,
    },
    {
      text: placeholderText,
      image:
        'https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ]

  useEffect(() => {
    setTimeout(() => {
      if (lastElementRef.current) {
        lastElementRef.current.scrollIntoView({ behavior: 'smooth' })
      }
    }, 300)
  }, [])

  return (
    <div className="flex flex-1 flex-col gap-y-4 overflow-y-auto p-4">
      {messageData.map((data, index) => (
        <Message key={index} isOwn={index % 2 === 0} text={data.text} image={data?.image} />
      ))}
      <div ref={lastElementRef}></div>
    </div>
  )
}

export default MessageSection
