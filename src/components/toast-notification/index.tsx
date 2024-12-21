import { Slide, ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

const ToastNotification = () => {
  return (
    <>
      <ToastContainer position="top-right" autoClose={2500} transition={Slide} />
    </>
  )
}

export default ToastNotification
