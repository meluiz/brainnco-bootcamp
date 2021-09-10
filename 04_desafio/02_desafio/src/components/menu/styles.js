import styled from 'styled-components'

export const Wrapper = styled.menu`
  grid-area: menu;
  position: relative;
`

export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
`

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  border-radius: 2px;
  transform: translateY(calc(-100% - 5px));
  background-color: #2f3437;

  button:first-child {
    border-right: 1px solid rgba(255,255,255,.1);
  }
`