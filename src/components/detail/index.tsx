import Intro from './intro'
import Option from './option'
import SharedPhotos from './shared-photos'

const Detail = () => {
  const optionData = [
    { text: 'Chat Settings', isOpen: false },
    { text: 'Privacy & Help', isOpen: false },
    { text: 'Shared Photos', isOpen: true },
  ]

  return (
    <div className="flex flex-col overflow-auto pb-4">
      <Intro />
      <div className="divide-y divide-white divide-opacity-15">
        {optionData.map(option => (
          <Option key={option.text} text={option.text} isOpen={option.isOpen} />
        ))}
      </div>
      <SharedPhotos />
      <button className="mx-4 mt-4 rounded-lg bg-red-700 py-2 duration-300 hover:bg-red-600">
        Block user
      </button>
      <button className="mx-4 mt-4 rounded-lg bg-blue-700 py-2 duration-300 hover:bg-blue-600">
        Logout
      </button>
    </div>
  )
}

export default Detail
