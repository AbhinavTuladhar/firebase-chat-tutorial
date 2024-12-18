import React, { ChangeEvent, useState } from 'react'

const Signup = () => {
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

  return (
    <div className="grid place-items-center">
      <div className="flex flex-col gap-y-4">
        <h2 className="text-xl font-bold">Create an Account</h2>
        <form className="flex flex-col gap-y-4">
          <div className="flex items-center gap-x-4">
            <img src="/avatar.png" className="size-12" />
            <span> Upload an image</span>
          </div>
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
