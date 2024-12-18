import { Route, Routes } from 'react-router-dom'

const index = () => {
  return (
    <Routes>
      <Route path="/" element={<div> home page </div>} />
      <Route path="/about" element={<div> about page </div>} />
    </Routes>
  )
}

export default index
