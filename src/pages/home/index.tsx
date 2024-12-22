import { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'

import Chat from '@/components/chat'
import Detail from '@/components/detail'
import Login from '@/components/login'
import Sidebar from '@/components/sidebar'
import Signup from '@/components/signup'
import ToastNotification from '@/components/toast-notification'
import { auth } from '@/firebase'
import { useAppDispatch } from '@/hooks/reduxHooks'
import useUser from '@/hooks/useUser'
import { fetchUserInfo } from '@/store/user-store'

const HomePage = () => {
  const dispatch = useAppDispatch()
  const { currentUser, isLoading } = useUser()

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, user => {
      dispatch(fetchUserInfo(user?.uid))
    })

    return () => unSub()
  }, [dispatch])

  if (isLoading) {
    return <div className="main-container grid place-items-center"> Loading...</div>
  }

  return (
    <>
      {currentUser ? (
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

export default HomePage
