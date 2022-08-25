import type { NextPage } from 'next'

import { auth } from 'lib/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import SignIn from '@/components/organisms/SignIn'
import ImageSearch from './image_search'

const Home: NextPage = () => {
  const [user] = useAuthState(auth)
  return user ? <ImageSearch /> : <SignIn />
}

export default Home
