const Button = ({ kind, children }) => {
  return (
    <button className={`button button-${kind ? kind : 'simple'}`} type="button">
      { children }
    </button>
  )
}

export default Button