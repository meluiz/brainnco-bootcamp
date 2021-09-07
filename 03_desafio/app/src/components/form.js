import React from 'react'

const Form = () => {
  const [ inputColor, setInputColor ] = React.useState('#ffffff')
  const [ inputPlate, setInputPlate ] = React.useState('')
  const [ inputYear, setInputYear ] = React.useState('')

  const handleInputPlate = (event) => {
    const format = event.target.value.replace(/([a-zA-Z]{3})(\d{4})/, '$1-$2')
    setInputPlate(format.toUpperCase())
  }

  const handleInputYear = (event) => {
    const format = event.target.value.replace(/\D/g, '')
    setInputYear(format)
  }

  return (
    <div className="form-wrapper">
      <form className="form">
        <div className="form-group">
          <label className="form-label" htmlFor="image">
            <span className="label">Link da imagem</span>
            <input className="input" type="url" name="image" id="image" required />
          </label>
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="brandModel">
            <span className="label">Marca/Modelo</span>
            <input className="input" type="text" name="brandModel" id="brandModel" required />
          </label>
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="year">
            <span className="label">Ano de compra</span>
            <input
              className="input"
              type="text"
              name="year"
              id="year"
              maxLength={4}
              value={inputYear}
              onChange={handleInputYear}
              required
              />
          </label>
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="plate">
            <span className="label">Placa</span>
            <input
              className="input"
              type="text"
              name="plate"
              id="plate"
              value={inputPlate}
              onChange={handleInputPlate}
              maxLength={8}
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="color">
            <span className="label">Color</span>
            <input
              type="color"
              className="input-color"
              id="color"
              value={inputColor}
              onChange={(event) => setInputColor(event.target.value)}
              required
              />
            <input className="input" type="text" name="color" value={inputColor} readOnly />
          </label>
        </div>
        <div className="form-group">
          <button className="form-submit" type="submit">
            Salvar e continuar
          </button>
        </div>
      </form>
    </div>
  )
}

export default Form