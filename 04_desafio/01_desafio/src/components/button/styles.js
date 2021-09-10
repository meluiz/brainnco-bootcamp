import styled from 'styled-components'

const handleButtonStyle = (color) => {
  switch (color) {
    case 'primary':
      return `
        color: white;
        font-weight: 600;
        background-color: #FF0080;
      `;
    case 'secondary':
      return `
        color: white;
        font-weight: 600;
        background-color: #FFF500;
      `;
    default:
      return ``;
  }
}

export const Wrapper = styled.button`
  border: 0;
  border-radius: 4px;
  min-width: 96px;
  padding: 12px 0;
  cursor: pointer;
  font-family: 'Inter', sans-serif;

  &:hover {
    filter: brightness(.9);
  }

  ${({ kind }) => handleButtonStyle(kind)}
`