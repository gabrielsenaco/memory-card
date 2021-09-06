import uniqid from 'uniqid'

import Alex from './../assets/Alex.png'
import Marty from './../assets/Marty.png'
import Gloria from './../assets/Gloria.png'
import Melman from './../assets/Melman.png'
import Skipper from './../assets/Skipper.png'
import Kowalski from './../assets/Kowalski.png'
import Rico from './../assets/Rico.png'
import Private from './../assets/Private.png'
import KingJulien from './../assets/KingJulien.png'
import Maurice from './../assets/Maurice.png'
import QueenClover from './../assets/QueenClover.png'
import Mort from './../assets/Mort.png'

import { getRandomArray } from './../utils'

export const createCard = ([title, src]) => {
  return {
    title,
    src,
    clicked: false,
    id: uniqid()
  }
}

export const createCardList = () => {
  let list = [
    ['Alex', Alex],
    ['Marty', Marty],
    ['Gloria', Gloria],
    ['Melman', Melman],
    ['Skipper', Skipper],
    ['Kowalski', Kowalski],
    ['Rico', Rico],
    ['Private', Private],
    ['King Julien', KingJulien],
    ['Maurice', Maurice],
    ['Queen Clover', QueenClover],
    ['Mort', Mort]
  ]

  list = list.map(name => {
    return createCard(name)
  })

  return getRandomArray(list)
}
