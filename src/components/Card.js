const Card = props => {
  let { name, src, clickHandler } = props

  return (
    <figure className='card' onClick={clickHandler}>
      <img src={src} alt={name} />
      <figcaption>{name}</figcaption>
    </figure>
  )
}

export default Card
