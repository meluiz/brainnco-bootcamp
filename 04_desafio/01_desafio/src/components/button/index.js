import { Wrapper } from "./styles"

const Button = ({ kind, children }) => {
  return (
    <Wrapper kind={kind} type="button">
      { children }
    </Wrapper>
  )
}

export default Button