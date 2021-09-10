import { Wrapper } from './styles'

const Box = ({ label, children }) => {
  return (
    <Wrapper data-label={label}>
      { children }
    </Wrapper>
  )
}

export default Box