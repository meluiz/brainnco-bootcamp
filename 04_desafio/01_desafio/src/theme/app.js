import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: block;
  position: relative;
  overflow: hidden;
  overflow-y: auto;
  background-color: #000;
`

export const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1280px;
  display: block;
  margin: 0 auto;
  position: relative;
`

export const Area = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 324px 1fr;
  grid-template-rows: 144px 86px auto 86px;
  grid-template-areas: 'header header'
                       'menu menu'
                       'sidebar main'
                       'footer footer';
  position: relative;
`