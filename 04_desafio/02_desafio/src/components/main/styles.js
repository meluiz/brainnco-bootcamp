import styled from 'styled-components'

export const Wrapper = styled.main`
  grid-area: main;
  position: relative;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

export const Header = styled.div`
  display: flex;
  flex-direction: column;
`

export const Icon = styled.div`
  height: 24px;
  font-size: 76px;
  user-select: none;
  transform: translateY(-96px);
`

export const Article = styled.div`
  a {
    color: #f1f1f1;
    text-decoration: none;

    :hover {
      text-decoration: underline;
    }
  }
`

export const MainReference = styled.div`
  padding: 32px 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  a {
    color: #5865F2;
    text-decoration: none;

    :hover {
      color: #5865F2;
      text-decoration: underline;
    }
  }
`