import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: block;
  position: relative;
  overflow: hidden;
  overflow-y: auto;
  background-color: #1C1917;
`

export const Container = styled.div`
  width: 100%;
  height: auto;
  max-width: 1280px;
  position: relative;
  overflow: hidden;
  margin: 0 auto;
`

export const Flexible = styled.div`
  width: 100%;
  min-height: 0;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 64px 0;
`