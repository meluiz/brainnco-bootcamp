const Box = ({ label, children }) => {
  return (
    <div className="box" data-label={label}>
      { children }
    </div>
  )
}

export default Box