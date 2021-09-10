import styled from 'styled-components'

export const Wrapper = styled.footer`
  grid-area: footer;
  position: relative;
`

export const Content = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 12px;

  p {
    margin: 0;
  }
`

export const Avatar = styled.figure`
  width: 48px;
  height: 48px;
  border-radius: 999px;
  overflow: hidden;

  img {
    width: 100%;
  }
` 
