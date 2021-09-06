import { useState } from 'react'
import { createCardList } from './objects/CardCharactersBuilder'
import Header from './components/Header'
import DisplayScore from './components/DisplayScore'
import PlayAgain from './components/PlayAgain'
import CardList from './components/CardList'
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

  function getRandomCardImage () {
    return cards.sort(() => 0.5 - Math.random())[0].src
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
