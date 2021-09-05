const MessageCard = (props) => {
  let {image, text} = props
  return (
      <div className='message-card'>
        {image && <img src={image} alt={text}/>}
        <p>{text}</p>
      </div>
    )
}

export default MessageCard
