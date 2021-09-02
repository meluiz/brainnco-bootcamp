const Image = ({ src, alt }) => {
  return (
    <figure className="image">
      <img src={src} alt={alt} />
    </figure>
  )
}

export default Image