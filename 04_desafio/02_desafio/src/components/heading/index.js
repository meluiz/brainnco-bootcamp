import { Heading1, Heading2, Heading3 } from "./styles"

export const H1 = ({ children }) => {
  return (
    <Heading1>{ children }</Heading1>
  )
}

export const H2 = ({ children }) => {
  return (
    <Heading2>{ children }</Heading2>
  )
}

export const H3 = ({ children }) => {
  return (
    <Heading3>{ children }</Heading3>
  )
}