import { Heading1, Heading2, Heading3, Heading4, Heading5, Heading6 } from "./styles"

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

export const H4 = ({ children }) => {
  return (
    <Heading4>{ children }</Heading4>
  )
}

export const H5 = ({ children }) => {
  return (
    <Heading5>{ children }</Heading5>
  )
}

export const H6 = ({ children }) => {
  return (
    <Heading6>{ children }</Heading6>
  )
}