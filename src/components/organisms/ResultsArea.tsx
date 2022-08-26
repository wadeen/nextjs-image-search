/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const ResultsArea = ({ resultsImages }: any) => {
  return (
    <ul css={container}>
      {resultsImages.map((image: any) => (
        <li key={image.id}>
          <img src={image.links.download} alt="" />
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
    width: calc((100% - 60px) / 3);
    img {
      width: 100%;
      height: 100%;
    }
  }
`
