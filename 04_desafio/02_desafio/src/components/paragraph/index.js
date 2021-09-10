import { Paragraph } from "./styles"

const Text = ({ small = false, children }) => {
  return (
    <Paragraph small={small}>{ children }</Paragraph>
  )
}

export default Text