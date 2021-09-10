import styled from 'styled-components'

export const Wrapper = styled.aside`
  grid-area: sidebar;
  display: block;
  position: relative;
`

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 48px 0;
  position: relative;
`

export const Sticky = styled.div`
  max-width: 256px;
  position: -webkit-sticky;
  position: sticky;
  bottom: 24px;
`

export const Info = styled.div`
  padding: 12px 0;
  margin-bottom: 8px;
  border-bottom: 1px solid #1a1a1a;

  button {
    width: 100%;
    font-weight: 700;
    margin-top: 14px;
  }
`

export const User = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 0;
  
  figure {
    margin-right: 12px;
  }
`