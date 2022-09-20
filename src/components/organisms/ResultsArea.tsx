/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { UnsplashImages } from '../../../types/UnsplashImages'
import Link from 'next/link'
import Image from 'next/image'
import { mq } from '../breakpoints'

const ResultsArea = ({
  resultsImages,
}: {
  resultsImages: UnsplashImages[]
}) => {
  return (
    <ul css={container}>
      {resultsImages.map((image: UnsplashImages) => (
        <li key={image.id}>
          <Link href={image.links.html}>
            <a>
              {/* eslint-disable */}
              <img src={image.urls.raw} alt="unsplash" />
            </a>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default ResultsArea

const container = css`
  margin: 80px 20px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
  ${mq[2]} {
    gap: 15px;
    margin: 60px 0;
  }
  li {
    width: calc((100% - 90px) / 4);
    ${mq[2]} {
      width: calc((100% - 15px) / 2);
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
`
