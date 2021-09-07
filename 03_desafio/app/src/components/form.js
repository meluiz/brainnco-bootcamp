import React from 'react'

const Form = () => {
  return (
    <div className="form-wrapper">
      <form className="form">
        <div className="form-group">
          <label className="label" htmlFor="image">
            <span className="text">Url da imagem</span>
            <input type="text" className="inputbox" name="image" id="image" />
          </label>
        </div>
        <div className="form-group">
          <label className="label" htmlFor="brandModel">
            <span className="text">Modelo do carro</span>
            <input type="text" className="inputbox" name="brandModel" id="brandModel" />
          </label>
        </div>
        <div className="form-group">
          <label className="label" htmlFor="year">
            <span className="text">Ano de fabricação</span>
            <input type="text" className="inputbox" namee="year" id="year" />
          </label>
        </div>
        <div className="form-group">
          <label className="label" htmlFor="color">
            <span className="text">Cor do carro</span>
            <div className="form-subgroup">
              <input type="color" className="inputcolor" id="color" />
              <input type="text" className="inputbox" name="color" />
            </div>
          </label>
        </div>
        <div className="form-group">
          <button className="form-submit" type="button">
            Salvar
          </button>
        </div>
      </form>
    </div>
  )
}

export default Form