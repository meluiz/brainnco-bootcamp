const Avatar = ({ src, alt }) => {
  return (
    <figure className="avatar">
      <img src={src} alt={alt} />
    </figure>
  )
}

export default Avatar