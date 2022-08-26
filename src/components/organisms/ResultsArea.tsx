/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { UnsplashImages } from '../../../types/UnsplashImages'
import Link from 'next/link'

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
              <img src={image.links.download} alt="" />
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
  li {
    width: calc((100% - 90px) / 4);
    img {
      width: 100%;
      height: 100%;
    }
  }
`
