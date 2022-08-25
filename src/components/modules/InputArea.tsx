/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React from 'react'
import { NextPage } from 'next'

type Props = {
  inputValue: any
  setInputValue: any
}

const InputArea: NextPage<Props> = ({ inputValue, setInputValue }) => {
  const onClickSearch = () => {
    setInputValue('')
  }

  return (
    <div css={container}>
      <input
        type="text"
        placeholder="キーワードを入力してください"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setInputValue(e.target.value)
        }
        value={inputValue}
      />
      <button type="button" onClick={onClickSearch}>
        検索
      </button>
    </div>
  )
}

export default InputArea

const container = css`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 15px;
  input {
    background-color: #fff;
    width: 250px;
    height: 35px;
    border: 1px solid #333;
    border-radius: 3px;
    padding: 10px 4px;
  }
  button {
    border: 1px solid #333;
    padding: 0 10px;
    border-radius: 3px;
    height: 35px;
    background-color: goldenrod;
    color: #fff;
  }
`
