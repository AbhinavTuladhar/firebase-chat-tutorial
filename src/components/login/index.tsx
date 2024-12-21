import React, { ChangeEvent, useState } from 'react'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  return (
    <div className="grid place-items-center">
      <div className="flex flex-col gap-y-4">
        <h2 className="text-center text-xl font-bold"> Welcome back! </h2>
        <form className="flex flex-col gap-y-4">
          <input
            className="rounded-lg bg-primary/60 px-4 py-2 placeholder:text-slate-600"
            placeholder="Email"
            value={formData.email}
            name="email"
            onChange={handleInputChange}
          />
          <input
            className="rounded-lg bg-primary/60 px-4 py-2 placeholder:text-slate-600"
            placeholder="Password"
            value={formData.password}
            name="password"
            onChange={handleInputChange}
          />
          <button className="rounded-lg bg-blue-600 py-2 duration-300 hover:bg-blue-500">
            Sign in
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
