/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const ResultsArea = () => {
  return (
    <ul css={container}>
      <li><img src="https://via.placeholder.com/400x300" alt="" /></li>
      <li><img src="https://via.placeholder.com/400x300" alt="" /></li>
      <li><img src="https://via.placeholder.com/400x300" alt="" /></li>
      <li><img src="https://via.placeholder.com/400x300" alt="" /></li>
      <li><img src="https://via.placeholder.com/400x300" alt="" /></li>
      <li><img src="https://via.placeholder.com/400x300" alt="" /></li>
      <li><img src="https://via.placeholder.com/400x300" alt="" /></li>
      <li><img src="https://via.placeholder.com/400x300" alt="" /></li>
      <li><img src="https://via.placeholder.com/400x300" alt="" /></li>
    </ul>
  );
}

export default ResultsArea;

const container = css`
  background-color: tomato;
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
`;