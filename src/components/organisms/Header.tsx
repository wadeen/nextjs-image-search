/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from 'lib/firebase'
import { NextPage } from 'next'
import { ReactNode } from 'react'
import LogOut from './LogOut'
const Head = () => {
  const [user] = useAuthState(auth)
  return (
    <>
      <header css={header}>
        <p>画像検索App</p>
        {user ? <LogOut /> : 'a'}
      </header>
    </>
  )
}

export default Head

const header = css`
  width: 100%;
  height: 80px;
  background-color: teal;
`
