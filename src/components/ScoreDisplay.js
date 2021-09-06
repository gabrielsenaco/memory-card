import Score from './Score'
import './../styles/ScoreDisplay.css'

const ScoreDisplay = props => {
  let { scoreValue, bestScoreValue } = props

  return (
    <div className='score-display'>
      <Score title='Score' value={scoreValue} />
      <Score title='Best Score' value={bestScoreValue} />
    </div>
  )
}

export default ScoreDisplay
