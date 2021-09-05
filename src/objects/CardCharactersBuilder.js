import uniqid from 'uniqid'

const createCard = title => {
  const imageTitle = title.replace(' ', '')
  return {
    title,
    src: `assets/${imageTitle}.png`,
    clicked: false,
    id: uniqid()
  }
}

const createCardList = () => {
  let list = [
    'Alex',
    'Marty',
    'Gloria',
    'Melman',
    'Skipper',
    'Kowalski',
    'Rico',
    'Private',
    'King Julien',
    'Maurice',
    'Queen Clover',
    'Mort'
  ]

  return list.map(name => {
    return createCard(name)
  })
}

export default createCardList
