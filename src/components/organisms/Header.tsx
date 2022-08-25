/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from 'lib/firebase'
import { NextPage } from 'next'
import LogOut from './LogOut'
import Link from 'next/link'
const Head: NextPage = () => {
  const [user] = useAuthState(auth)
  return (
    <header css={header}>
      <div>
        <h1>
          <Link href="/">
            <a>画像検索App</a>
          </Link>
        </h1>
        {user ? <LogOut /> : ''}
      </div>
    </header>
  )
}

export default Head

const header = css`
  width: 100%;
  height: 80px;
  background-color: teal;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    padding: 0 30px;
  }
  h1 {
    font-size: 3rem;
    font-weight: 900;
    letter-spacing: 0.05em;
    a {
      transition: opacity .3s ease;
      &:hover {
        opacity: .8;
      }
    }
  }
`
