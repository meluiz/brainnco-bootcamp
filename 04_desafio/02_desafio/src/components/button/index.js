import { Wrapper } from "./styles"

const Button = ({ kind = 'simple', children }) => {
  return (
    <Wrapper styleType={kind} type="button">
      { children }
    </Wrapper>
  )
}

export default Button