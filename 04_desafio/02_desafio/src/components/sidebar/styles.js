import styled from 'styled-components'

export const Wrapper = styled.aside`
  grid-area: sidebar;
  background-color: #373c3f;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 24px 0;
`

export const Buttons = styled.div`
  padding: 0 12px;
  margin-bottom: 24px;
`

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;

  li {
    width: 100%;
    overflow: hidden;

    a {
      width: 100%;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      text-decoration: none;
      padding: 6px 8px;
      color: #9a9a9a;
      font-size: 14px;

      :hover {
        color: white;
        background-color: rgba(255,255,255,.06);
      }
    }
  }


`
