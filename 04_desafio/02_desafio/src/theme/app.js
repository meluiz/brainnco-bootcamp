import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: block;
  position: relative;
  overflow: hidden;
  overflow-y: auto;
  background-color: #2f3437;
`

export const Container = styled.div`
  width: 100%;
  max-width: 640px;
  height: 100%;
  display: block;
  position: relative;
  margin: 0 auto;
`

export const Area = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 208px;
  grid-template-rows: 208px 32px auto 86px;
  grid-template-areas: 'header header'
                       'sidebar menu'
                       'sidebar main'
                       'sidebar footer';
`