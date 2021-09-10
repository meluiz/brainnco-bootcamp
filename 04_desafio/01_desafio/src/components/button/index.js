const Button = ({ kind, children }) => {
  return (
    <button className={`button button-${kind}`} type="button">
      { children }
    </button>
  )
}

export default Button