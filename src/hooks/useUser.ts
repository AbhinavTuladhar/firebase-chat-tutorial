import { UserSelector } from '@/store/user-store'

import { useAppSelector } from './reduxHooks'

const useUser = () => {
  const { currentUser, isLoading } = useAppSelector(UserSelector)

  return {
    currentUser,
    isLoading,
  }
}

export default useUser
