const Text = ({ small, children }) => {
  return (
    <p className={`text${small ? ' small' : ''}`}>{ children }</p>
  )
}

export default Text