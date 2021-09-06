import uniqid from 'uniqid'

export const createCard = title => {
  const imageTitle = title.replace(' ', '')
  return {
    title,
    src: `assets/${imageTitle}.png`,
    clicked: false,
    id: uniqid()
  }
}

export const createCardList = () => {
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