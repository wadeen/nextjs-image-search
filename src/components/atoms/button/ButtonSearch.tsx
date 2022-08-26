import { NextPage } from 'next'

type Props = {
  name: string
  onClick: () => void
}

const ButtonSearch: NextPage<Props> = ({ name, onClick }) => {
  return (
    <button type="button" onClick={onClick}>
      {name}
    </button>
  )
}

export default ButtonSearch
