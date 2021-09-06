import './../styles/MessageCard.css'

const MessageCard = props => {
  let { image, text } = props
  return (
    <div className='message-card'>
      {image && <img src={image} alt={text} className='message-card-icon'/>}
      <p className='message-card-text'>{text}</p>
    </div>
  )
}

export default MessageCard
