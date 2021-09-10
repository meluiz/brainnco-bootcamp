import styled from 'styled-components'

export const Wrapper = styled.div`
  display: block;
  position: relative;
  padding: 12px 0;
`

export const Title = styled.h2`
  color: #E7E5E4;
  margin-bottom: 28px;
`

export const TableWrapper = styled.table`
  width: 100%;
  border-collapse: collapse;
`

export const TableHead = styled.thead`
  width: 100%;
  border-collapse: collapse;

  tr {
    border-bottom: 1px solid #44403C;
    th {
      padding: 12px 0;
      text-align: center;
      font-weight: 600;
      color: #78716C;
      :nth-child(2) {
        text-align: left;
        padding: 0 24px;
      }
    }
  }
`


export const TableBody = styled.tbody`
  width: 100%;
  border-collapse: collapse;

  tr {
    padding: 12px 0;
    border-bottom: 1px solid #292524;

    td {
      padding: ${({ isEmpty }) => isEmpty ? '32px 0' : '12px 0'};
      text-align: center;
      padding: 12px 0;
      color: #F5F5F4;
    
      :nth-child(1) {
        width: 8%;
      }

      :nth-child(2) {
        width: 20%;
        padding: 0 24px;
        text-align: left;
      }

      :nth-child(3) {
        width: 31%;
      }

      :nth-child(4),
      :nth-child(5),
      :nth-child(6) {
        width: 11%;
      }
    }
  }
`

export const TableEmpty = styled.td`
  padding: 32px 0 !important;
  text-align: center;
`

export const TableImage = styled.figure`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
  }
`

export const TableModel = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-family: 'Karla', sans-serif !important;

    :first-child {
      font-size: 18px;
      font-weight: 600;
    }

    :last-child {
      color: #A8A29E;
      font-weight: 600;
    }
  }
`

export const TableColor = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    display: inline-block;
    width: 64%;
    height: 8px;
    border-radius: 999px;
  }
`

export const TableActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const TableButton = styled.button`
  border: 0;
  padding: 8px;
  color: #57534E;
  background-color: transparent;
  cursor: pointer;

  :hover {
    color: #ED4245;
  }
`

export const TableCounter = styled.td`
  padding: 18px;
  border: 0;

  div {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 24px 12px;
    text-transform: uppercase;
    font-size: 16px;

    strong {
      font-weight: 600;
      font-family: 'Karla', sans-serif !important;
    }

    span {
      display: flex;
      align-items: center;
      color: #A8A29E;
      font-family: 'Karla', sans-serif !important;
    }
  }
`

export const SpanNumber = styled.span`
  font-family: 'Karla', sans-serif !important;
`