import styled from 'styled-components'


export const Wrapper = styled.header`
  grid-area: header;
  display: block;
  position: relative;
`

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
`