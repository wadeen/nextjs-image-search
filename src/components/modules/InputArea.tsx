/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React from 'react'
import { NextPage } from 'next'
import ButtonSearch from '../atoms/button/ButtonSearch'

type Props = {
  inputValue: string
  setInputValue: React.Dispatch<React.SetStateAction<string>>
  getImages: () => void
}

const InputArea: NextPage<Props> = ({
  inputValue,
  setInputValue,
  getImages,
}) => {
  const onClickSearch = () => {
    // setInputValue('')
    getImages()
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
      <ButtonSearch name={'検索'} onClick={onClickSearch} />
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
