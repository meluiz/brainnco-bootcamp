import styled from 'styled-components'

export const Wrapper = styled.main`
  grid-area: main;
  display: block;
  position: relative;
`

export const Container = styled.div`
  width: 100%;
  max-width: 768px;
  padding: 24px 32px;
  margin: 0 auto;

  h1 {
    margin-bottom: 24px;
  }

  h2 {
    margin-top: 48px;
    margin-bottom: 24px;
  }

  p {
    margin-bottom: 12px;
  }
`