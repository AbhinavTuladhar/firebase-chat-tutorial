import { ChangeEvent, FormEvent, useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import { toast } from 'react-toastify'

import { auth, db } from '@/firebase'

interface Avatar {
  file: File
  url: string
}

const Signup = () => {
  const [avatar, setAvatar] = useState<Avatar>({
    file: new File([], ''),
    url: '',
  })
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    password: '',
  })

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleUploadImage = (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target

    if (files && files.length > 0) {
      const file = files[0]
      const url = URL.createObjectURL(file)
      setAvatar({
        file,
        url,
      })
    }
  }

  const handleRegister = async (event: FormEvent) => {
    event.preventDefault()
    console.log(formData)

    const { email, password, userName } = formData

    try {
      const response = await createUserWithEmailAndPassword(auth, email, password)
      console.log(response)

      // Save to remote database
      await setDoc(doc(db, 'users', response.user.uid), {
        userName,
        email,
        id: response.user.uid,
        blocked: [],
      })

      await setDoc(doc(db, 'userChats', response.user.uid), {
        chats: [],
      })

      toast.success('Account created successfully!')
    } catch (error) {
      console.error(error)
      if (error instanceof Error) {
        toast.error(error.message)
      }
    }
  }

  return (
    <div className="grid place-items-center">
      <div className="flex flex-col gap-y-4">
        <h2 className="text-xl font-bold">Create an Account</h2>
        <form className="flex flex-col gap-y-4" onSubmit={handleRegister}>
          <>
            <label htmlFor="file-input" className="flex cursor-pointer items-center gap-x-4">
              <img src={avatar.url || '/avatar.png'} className="size-12" />
              <span> Upload an image</span>
            </label>
            <input id="file-input" type="file" className="hidden" onChange={handleUploadImage} />
          </>
          <input
            className="rounded-lg bg-primary/60 px-4 py-2"
            placeholder="Username"
            name="userName"
            onChange={handleInputChange}
            value={formData.userName}
          />
          <input
            className="rounded-lg bg-primary/60 px-4 py-2"
            placeholder="Email"
            name="email"
            onChange={handleInputChange}
            value={formData.email}
          />
          <input
            className="rounded-lg bg-primary/60 px-4 py-2"
            placeholder="Password"
            name="password"
            type="password"
            onChange={handleInputChange}
            value={formData.password}
          />
          <button className="rounded-lg bg-blue-600 py-2 duration-300 hover:bg-blue-500">
            Register
          </button>
        </form>
      </div>
    </div>
  )
}

export default Signup
