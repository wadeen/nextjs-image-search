/** @jsxImportSource @emotion/react */
import InputArea from '@/components/modules/InputArea'
import ResultsArea from '@/components/organisms/ResultsArea'
import { css } from '@emotion/react'
import axios from 'axios'
import Head from 'next/head'
import { useState } from 'react'
const ImageSearch = () => {
  const [inputValue, setInputValue] = useState('')

  const [resultsImages, setResultsImages] = useState([])

  const getImages = () => {
    axios
      .get(
        `https://api.unsplash.com/search/photos?query=${inputValue}&client_id=${process.env.NEXT_PUBLIC_UNSPLASH_KEY}`
      )
      .then((res) => setResultsImages(res.data.results))
      .catch((err) => console.log(err))
  }

  console.log(resultsImages)

  return (
    <div css={container}>
      <Head>
        <title>検索フォーム | 画像検索App</title>
      </Head>
      <h2>
        画像検索App
        <span>
          by
          <a href="https://unsplash.com/" target="_blank">
            Unsplash
          </a>
        </span>
      </h2>
      <InputArea
        inputValue={inputValue}
        setInputValue={setInputValue}
        getImages={getImages}
      />
      <ResultsArea resultsImages={resultsImages} />
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
      margin-left: 15px;
    }
    a {
      color: blue;
      text-decoration: underline;
      margin-left: 5px;
    }
  }
`
