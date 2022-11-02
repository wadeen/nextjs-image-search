/** @jsxImportSource @emotion/react */
import { mq } from '@/components/breakpoints'
import InputArea from '@/components/modules/InputArea'
import ResultsArea from '@/components/organisms/ResultsArea'
import { css } from '@emotion/react'
import axios from 'axios'
import Head from 'next/head'
import { useState } from 'react'
import { UnsplashImages } from '../../types/UnsplashImages'
const ImageSearch = () => {
  const [inputValue, setInputValue] = useState('')

  const [resultsImages, setResultsImages] = useState<UnsplashImages[]>([])

  const getImages = () => {
    axios
      .get(
        `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
          inputValue
        )}&per_page=30&client_id=${process.env.NEXT_PUBLIC_UNSPLASH_KEY}`
      )
      .then((res) => {
        setResultsImages(res.data.results)
      })
      .catch((err) => console.log(err))
  }

  return (
    <div css={container}>
      <Head>
        <title>検索フォーム | Search Photos</title>
      </Head>
      <h2>
        Search Photos
        <span>
          by
          <a
            href="https://unsplash.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
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
    ${mq[1]} {
      font-size: 2rem;
    }
    span {
      font-size: 20px;
      font-weight: 500;
      margin-left: 15px;
      ${mq[1]} {
        font-size: 1.6rem;
      }
    }
    a {
      color: blue;
      text-decoration: underline;
      margin-left: 5px;
    }
  }
`
