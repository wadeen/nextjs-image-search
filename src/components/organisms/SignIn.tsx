/** @jsxImportSource @emotion/react */
import type { NextPage } from 'next'
import { css } from '@emotion/react'
import { signInWithPopup } from 'firebase/auth'
import { auth, providerGoogle } from 'lib/firebase'
import Head from 'next/head'

const SignIn: NextPage = () => {
  const onClickLogin = () => {
    signInWithPopup(auth, providerGoogle)
  }
  return (
    <div>
      <Head>
        <title>ログイン | 画像検索App</title>
      </Head>
      <h1>ログインページ</h1>
      <button onClick={onClickLogin}>ログインする</button>
    </div>
  )
}

export default SignIn

const container = css`
  background-color: antiquewhite;
  width: min(100%, 1100px);
  margin: 0 auto;
  padding: 0 20px;
`
