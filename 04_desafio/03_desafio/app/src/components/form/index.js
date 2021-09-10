import React from 'react'

import { FakeInput, FormButton, FormFixed, FormFixedButtons, FormFixedText, FormGroup, FormSubGroup, FormWrapper, Input, InputColor, Label, Text, Title, Wrapper } from './styled'

const Form = ({ setCars }) => {
  const [ isToggle, setToggle ] = React.useState(false)
  const [ inputPlate, setInputPlate ] = React.useState('')
  const [ inputYear, setInputYear ] = React.useState('')
  const [ inputColor, setInputColor ] = React.useState('#ffffff')
  const [ alterationBar, setAlterationBar ] = React.useState({
    error: false,
    text: 'Houve uma alteração no formulário'
  })

  const handleInputYear = (event) => {
    const format = event.target.value.replace(/\D/g, '')
    setInputYear(format)
  }

  const handleInputPlate = (event) => {
    const format = event.target.value
      .replace(/([a-zA-Z]{3})/, '$1')
      .replace(/([0-9]{4})/, '$1')
      .replace(/(^[a-zA-Z]{3})([0-9]{4})/, '$1-$2')
    setInputPlate(format.toUpperCase())
  }

  const handleFormReset = () => {
    setInputYear('')
    setInputPlate('')
    setToggle(false)
    setAlterationBar({
      error: false,
      text: 'Houve uma alteração no formulário'
    })
  }

  const handleInputsByForm = (event) => {
    const formElement = event.target.closest('form')
    const { image, brandModel, plate, year } = formElement.elements
    if (
      image.value.length > 0 ||
      brandModel.value.length > 0 ||
      plate.value.length > 0 ||
      year.value.length > 0
    ) {
      setToggle(true)
    } else {
      setToggle(false)
    }
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
  
    const { image, brandModel, plate, year, color } = event.target.elements
    setAlterationBar({
      error: false,
      text: 'Houve uma alteração no formulário'
    })

    fetch('http://localhost:3333/cars', {
      method: 'post',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        image: image.value,
        brandModel: brandModel.value,
        year: Number(year.value),
        plate: plate.value,
        color: color.value
      })
    })
    .then(response => response.json())
    .then((response) => {
      if (response.error) {
        return setAlterationBar({
          error: true,
          text: `${response.message}`
        })
      }

      setCars((prevState) => {
        return [
          ...prevState, {
            image: image.value,
            brandModel: brandModel.value,
            year: Number(year.value),
            plate: plate.value,
            color: color.value
          }
        ]
      })

      handleFormReset()
      event.target.reset()
    })
  }

  return (
    <Wrapper>
      <Title>Cadastre um novo carro</Title>
      <FormWrapper
        onChange={handleInputsByForm}
        onSubmit={handleFormSubmit}
        >
        <FormGroup>
          <Label htmlFor="image">
            <Text>Url da imagem</Text>
            <Input
              type="url"
              name="image"
              id="image"
              required
              />
          </Label>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="brandModel">
            <Text>Modelo do carro</Text>
            <Input
              type="text"
              name="brandModel"
              id="brandModel"
              required
              />
          </Label>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="plate">
            <Text>Placa do carro</Text>
            <Input
              type="text"
              number={true}
              name="plate"
              id="plate"
              value={inputPlate}
              minLength={8}
              maxLength={8}
              required
              onChange={handleInputPlate}
              />
          </Label>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="year">
            <Text>Ano de fabricação</Text>
            <Input
              type="text"
              number={true}
              name="year"
              id="year"
              value={inputYear}
              minLength={2}
              maxLength={4}
              required
              onChange={handleInputYear}
              />
          </Label>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="color">
            <Text>Cor do carro</Text>
            <FormSubGroup>
              <InputColor
                type="color"
                className="inputcolor"
                id="color"
                name="color"
                value={inputColor}
                onChange={(event) => setInputColor(event.target.value)}
                />
              <FakeInput number={true}>{inputColor}</FakeInput>
            </FormSubGroup>
          </Label>
        </FormGroup>
        <FormFixed className={`${isToggle ? ' visible' : ''}${alterationBar.error ? ' error' : ''}`}>
          <FormFixedText number={true}>
            { alterationBar.text }
          </FormFixedText>
          <FormFixedButtons>
            <FormButton type="reset" onClick={handleFormReset}>
              Redefinir
            </FormButton>
            <FormButton styleType="primary" type="submit">
              Salvar veículo
            </FormButton>
          </FormFixedButtons>
        </FormFixed>
      </FormWrapper>
    </Wrapper>
  )
}

export default Form