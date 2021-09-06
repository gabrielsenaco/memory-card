import { useState, useEffect } from 'react'
import { createCardList } from './objects/CardCharactersBuilder'
import Header from './components/Header'
import ScoreDisplay from './components/ScoreDisplay'
import PlayAgain from './components/PlayAgain'
import CardList from './components/CardList'
import { getRandomArray } from './utils'
//import './App.css';

const App = () => {
  let [score, setScore] = useState(0)
  let [bestScore, setBestScore] = useState(0)
  let [cards, setCards] = useState(createCardList())
  let [showPlayAgain, setShowPlayAgain] = useState(false)

  useEffect(() => {
    setShowPlayAgain(() => {
      return score === cards.length
    })
  }, [score, cards.length])

  function handleCardClick (id, event) {
    clearStateWhenScoreReachesLimit()
    setCards(cards => {
      cards = cards.map(card => {
        if (card.id !== id) return card
        let clicked = card.clicked

        if (!clicked) {
          clicked = true
          setScore(score => {
            ++score
            return score
          })
        } else {
          clearClickedCards()
          updateBestScore()
          setScore(() => 0)
        }

        return {
          ...card,
          clicked
        }
      })
      return getRandomArray(cards)
    })
  }

  function handlePlayAgainClick () {
    clearStateWhenScoreReachesLimit()
  }

  function clearClickedCards () {
    setCards(cards => {
      cards = cards.map(card => {
        return {
          ...card,
          clicked: false
        }
      })
      return getRandomArray(cards)
    })
  }

  function updateBestScore (refScore = score) {
    setBestScore(bestScore => {
      if (refScore > bestScore) {
        bestScore = refScore
      }
      return bestScore
    })
  }

  function clearStateWhenScoreReachesLimit () {
    let reachLimit = score === cards.length
    if (!reachLimit) return

    setShowPlayAgain(() => false)
    updateBestScore(score)
    setScore(() => 0)
    clearClickedCards()
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
        <ScoreDisplay scoreValue={score} bestScoreValue={bestScore} />
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
