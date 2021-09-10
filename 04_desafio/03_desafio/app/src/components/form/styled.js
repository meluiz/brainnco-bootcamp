import styled from 'styled-components'

const handleButtonStyle = (style) => {
  switch (style) {
    case 'primary':
      return `
        background-color: #3ca95e;
        :hover {
          text-decoration: none;
          background-color: #349151;
        }
      `;
    default:
      return ``;
  }
}

export const Wrapper = styled.div`
  display: block;
  position: relative;
  padding: 12px 0;
  margin-bottom: 32px;
`

export const Title = styled.h2`
  color: #E7E5E4;
  margin-bottom: 28px;
`

export const FormWrapper = styled.form`
  display: flex;
  gap: 12px;
`

export const FormGroup = styled.div`
  flex: 1;
`

export const FormSubGroup = styled.div`
  width: 100%;
  display: flex;
  position: relative;
`

export const FormFixed = styled.div`
  width: 100%;
  max-width: 768px;
  border-radius: 4px;
  padding: 20px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  bottom: 14px; left: 50%;
  transition: all 300ms ease;
  visibility: hidden;
  opacity: 0;
  transform: translateX(-50%) scale(.9);
  background-color: #292524;
  z-index: 10;

  &.visible {
    visibility: visible;
    opacity: 1;
    transform: translateX(-50%) scale(1);
  }

  &.error {
    opacity: .9;
    background-color: #ED4245;
    animation: form-error-shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
  }
  
  @keyframes form-error-shake {
    10%, 90% {
      left: calc(50% - 1px);
    }
    
    20%, 80% {
      left: calc(50% + 2px);
    }

    30%, 50%, 70% {
      left: calc(50% - 4px);
    }

    40%, 60% {
      left: calc(50% + 4px);
    }
  }
`

export const FormFixedText = styled.div`
  display: flex;
  align-items: center;
  color: white;
  padding-top: 4px;
  font-size: 17px;
  font-family: ${({ number }) => number ? "'Karla', sans-serif !important;" : "'Catamaran', sans-serif;"};
`

export const FormFixedButtons = styled.div`
  display: flex;
  gap: 8px;
`

export const FormButton = styled.button`
  min-width: 96px;
  cursor: pointer;
  border: 0;
  border-radius: 4px;
  background-color: transparent;
  color: white;
  font-size: 16px;
  font-weight: 600;
  font-family: 'Catamaran', sans-serif;
  padding: 8px 24px;

  :hover {
    text-decoration: underline;
  }

  ${({ styleType }) => handleButtonStyle(styleType)}
`

export const Label = styled.label`
  display: flex;
  position: relative;
  border-radius: 4px;
  color: #78716C;
  background-color: #292524;
`

export const Text = styled.span`
  position: absolute;
  top: 14px; left: 12px;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 700;
`

export const Input = styled.input`
  width: 100%;
  height: 69px;
  border: 0;
  position: relative;
  background: transparent;
  padding: 28px 12px 12px 12px;
  font-size: 16px;
  color: #D6D3D1;
  font-size: 18px;
  font-family: ${({ number }) => number ? "'Karla', sans-serif !important;" : "'Catamaran', sans-serif;"};
  cursor: text;

  :focus {
    outline: none;
  }
`

export const FakeInput = styled.div`
  width: 100%;
  height: 69px;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  background: transparent;
  padding: 28px 12px 12px 36px;
  font-size: 16px;
  color: #D6D3D1;
  font-size: 18px;
  font-family: ${({ number }) => number ? "'Karla', sans-serif !important;" : "'Catamaran', sans-serif;"};
  cursor: text;

  :focus {
    outline: none;
  }
`

export const InputColor = styled.input`
  width: 16px;
  height: 16px;
  border: 0;
  border-radius: 999px;
  overflow: hidden;
  position: absolute;
  bottom: 18px; left: 12px;
  cursor: pointer;
  z-index: 10;

  :focus {
    outline: none;
  }
`