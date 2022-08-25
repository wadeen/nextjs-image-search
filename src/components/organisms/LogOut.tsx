import { auth } from 'lib/firebase'
const LogOut = () => {
  return <p onClick={() => auth.signOut()}>ログアウト</p>
}

export default LogOut
