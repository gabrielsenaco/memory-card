import MessageCard from './MessageCard'
import Button from './Button'

const PlayAgain = props => {
  let { clickHandler, image } = props

  return (
    <div className='play-again'>
      <MessageCard image={image} text='You found all ....' />
      <Button text='Play Again' onClick={clickHandler} />
    </div>
  )
}

export default PlayAgain
