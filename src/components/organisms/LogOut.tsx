/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { auth } from 'lib/firebase'
const LogOut = () => {
  return (
    <p onClick={() => auth.signOut()} css={logout}>
      ログアウト
    </p>
  )
}

export default LogOut

const logout = css`
  font-size: 2rem;
  cursor: pointer;
  transition: opacity 0.3s ease;
  &:hover {
    opacity: 0.8;
  }
`
