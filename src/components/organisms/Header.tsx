/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from 'lib/firebase'
import { NextPage } from 'next'
import LogOut from '../modules/LogOut'
import Link from 'next/link'
import { mq } from '../breakpoints'
const Header: NextPage = () => {
  const [user] = useAuthState(auth)
  return (
    <header css={header}>
      <div>
        <h1>
          <Link href="/">
            <a>Search Photos</a>
          </Link>
        </h1>
        {user ? <LogOut /> : ''}
      </div>
    </header>
  )
}

export default Header

const header = css`
  width: 100%;
  height: 80px;
  background-color: #333;
  color: #fff;
  box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.1);
  ${mq[1]} {
    height: 60px;
  }
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
    ${mq[1]} {
      font-size: 2rem;
    }
    a {
      transition: opacity 0.3s ease;
      &:hover {
        opacity: 0.8;
      }
    }
  }
`
