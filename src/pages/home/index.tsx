import Chat from '@/components/chat'
import Detail from '@/components/detail'
import Login from '@/components/login'
import Sidebar from '@/components/sidebar'
import Signup from '@/components/signup'
import ToastNotification from '@/components/toast-notification'

const index = () => {
  const isLoggedIn = false

  return (
    <>
      {isLoggedIn ? (
        <div className="main-container chat">
          <Sidebar />
          <Chat />
          <Detail />
        </div>
      ) : (
        <div className="main-container login">
          <Login />
          <Signup />
        </div>
      )}
      <ToastNotification />
    </>
  )
}

export default index
