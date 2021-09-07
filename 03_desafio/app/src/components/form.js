const Form = () => {
  return (
    <div className="form-wrapper">
      <form className="form" action="">
        <div className="form-group">
          <label className="form-label" htmlFor="image">
            <span className="label">Link da imagem</span>
            <input className="input" type="url" name="image" id="image" />
          </label>
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="brandModel">
            <span className="label">Marca/Modelo</span>
            <input className="input" type="text" name="brandModel" id="brandModel" />
          </label>
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="year">
            <span className="label">Ano</span>
            <input className="input" type="text" name="year" id="year" />
          </label>
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="plate">
            <span className="label">Placa</span>
            <input className="input" type="text" name="plate" id="plate" />
          </label>
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="color">
            <span className="label">Color</span>
            <input className="input" type="text" name="plate" id="color" />
          </label>
        </div>
        <div className="form-group">
          <button className="form-submit" type="submit">
            Adicionar
          </button>
        </div>
      </form>
    </div>
  )
}

export default Form