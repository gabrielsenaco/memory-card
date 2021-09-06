import Card from './Card'
import './../styles/CardList.css'

const CardList = props => {
  let { cards, clickHandler } = props

  cards = cards.map(card => {
    let handler = clickHandler.bind(null, card.id)
    return (
      <Card
        key={card.id}
        src={card.src}
        name={card.title}
        clickHandler={handler}
      />
    )
  })

  return <ul className='card-list'>{cards}</ul>
}

export default CardList
