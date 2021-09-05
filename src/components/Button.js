const Button = (props) => {
  let {onClick, text, color, bgColor} = props

  let className = 'button'
  className = className.concat(' ', color || '').concat(' ', bgColor || '')

  return (
      <button onClick={onClick} className={className}>{text}</button>
  )
}

export default Button
