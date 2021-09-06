import MessageCard from './MessageCard'
import Button from './Button'
import './../styles/PlayAgain.css'

const PlayAgain = props => {
  let { clickHandler, image } = props

  return (
    <div className='play-again'>
      <MessageCard image={image} text='Your memory is good! You found all!' />
      <Button text='Play Again' onClick={clickHandler} />
    </div>
  )
}

export default PlayAgain
