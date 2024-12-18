import { GoDownload } from 'react-icons/go'

const SharedPhotos = () => {
  const array = Array.from({ length: 3 }, (_, index) => index)

  return (
    <div className="flex flex-col gap-y-4">
      {array.map(index => (
        <div className="flex items-center justify-between px-4" key={index}>
          <div className="flex items-center gap-x-4">
            <img
              src="https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="max-h-10 rounded-lg"
            />
            <span className="text-sm"> photo_123.jpg </span>
          </div>
          <div className="grid size-10 place-items-center rounded-full bg-primary/50">
            <GoDownload />
          </div>
        </div>
      ))}
    </div>
  )
}

export default SharedPhotos
