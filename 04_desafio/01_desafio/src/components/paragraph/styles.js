import styled from 'styled-components'

export const Paragraph = styled.p`
  color: #7C7977;
  font-size: ${ props => props.small ? '16px' : '15px' };
`