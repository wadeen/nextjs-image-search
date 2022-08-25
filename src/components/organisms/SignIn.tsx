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
    <div css={container}>
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
  width: min(100%, 1100px);
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
  h1 {
    font-size: 3.4rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 50px;
  }
  button {
    width: 200px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background-color: skyblue;
    border-radius: 100vmax;
  }
`
