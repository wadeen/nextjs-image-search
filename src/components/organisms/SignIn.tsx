/** @jsxImportSource @emotion/react */
import type { NextPage } from 'next'
import { css } from '@emotion/react'
import { signInAnonymously, signInWithPopup } from 'firebase/auth'
import { auth, providerGoogle } from 'lib/firebase'
import Head from 'next/head'
import { mq } from '../breakpoints'

const SignIn: NextPage = () => {
  // Googleでログイン
  const onClickLoginGoogle = () => {
    signInWithPopup(auth, providerGoogle)
  }
  // 匿名でログイン
  const onClickLoginAnonymous = () => {
    signInAnonymously(auth)
  }
  return (
    <div css={container}>
      <Head>
        <title>ログイン | Search Photos</title>
      </Head>
      <h1>ログインページ</h1>
      <div css={loginBtn}>
        <button onClick={onClickLoginGoogle}>Googleでログイン</button>
        <button onClick={onClickLoginAnonymous}>ゲストログイン</button>
      </div>
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
    ${mq[1]} {
      font-size: 2.8rem;
    }
  }
  button {
    width: 200px;
    height: 40px;
    line-height: 38px;
    text-align: center;
    background-color: skyblue;
    border-radius: 10px;
    border: 1px solid #333;
    font-weight: 700;
    ${mq[1]} {
      width: 180px;
    }
  }
`

const loginBtn = css`
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: center;
  align-items: center;
`
