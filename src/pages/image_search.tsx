/** @jsxImportSource @emotion/react */
import InputArea from '@/components/modules/InputArea'
import { css } from '@emotion/react'
import { useState } from 'react'
const ImageSearch = () => {
  const [inputValue, setInputValue] = useState('')
  return (
    <div css={container}>
      <h2>
        画像検索アプリ{' '}
        <span>
          by
          <a href="https://unsplash.com/" target="_blank">
            Unsplash
          </a>
        </span>
      </h2>
      <InputArea inputValue={inputValue} setInputValue={setInputValue} />
    </div>
  )
}

export default ImageSearch

const container = css`
  h2 {
    font-size: 3rem;
    text-align: center;
    margin-bottom: 40px;
    font-weight: 700;
    span {
      font-size: 20px;
      font-weight: 500;
    }
    a {
      color: blue;
      text-decoration: underline;
      margin-left: 5px;
    }
  }
`
