const Card = props => {
  let { name, src, clickHandler } = props

  return (
    <figure className='card' onClick={clickHandler}>
      <img src={src} alt={name} />
      <figCaption>{name}</figCaption>
    </figure>
  )
}

export default Card
