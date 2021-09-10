import styled from 'styled-components'

const handleButtonStyle = (style) => {
  switch (style) {
    case 'simple':
      return `
        color: white;
        padding: 4px 8px;
        background-color: transparent;
      `;
    case 'primary':
      return `
        width: 100%;
        padding: 16px 0;
        border-radius: 4px;
        color: white;
        font-weight: 600;
        background-color: #ee4444;
      `;
    default:
      return ``;
  }
}

export const Wrapper = styled.button`
  border: 0;
  cursor: pointer;
  font-family: 'Inter', sans-serif;

  &:hover {
    filter: brightness(.9);
  }

  ${({ styleType }) => handleButtonStyle(styleType)}
`