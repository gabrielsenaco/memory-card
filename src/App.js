import { useState } from 'react'
import { createCardList } from './objects/CardCharactersBuilder'
import Header from './components/Header'
import DisplayScore from './components/DisplayScore'
import PlayAgain from './components/PlayAgain'
import CardList from './components/CardList'
import { getRandomArray } from './utils'
//import './App.css';

const App = () => {
  let [score, setScore] = useState(0)
  let [bestScore, setBestScore] = useState(0)
  let [cards, setCards] = useState(createCardList())
  let [showPlayAgain, setShowPlayAgain] = useState(false)

  function handleCardClick (id, event) {
    // card click
  }

  function handlePlayAgainClick () {
    //play again click
  }

  function getRandomCards () {
    return getRandomArray(cards)
  }

  function getRandomCardImage () {
    return getRandomCards()[0].src
  }

  return (
    <div id='app'>
      <Header />
      <main>
        <DisplayScore scoreValue={score} bestScoreValue={bestScore} />
        {showPlayAgain && (
          <PlayAgain
            clickHandler={handlePlayAgainClick}
            image={getRandomCardImage()}
          />
        )}
        <CardList cards={cards} clickHandler={handleCardClick} />
      </main>
    </div>
  )
}

export default App
