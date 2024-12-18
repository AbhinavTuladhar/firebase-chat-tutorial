import { Route, Routes } from 'react-router-dom'

import Home from '@/pages/home'

const index = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<div> about page </div>} />
    </Routes>
  )
}

export default index
