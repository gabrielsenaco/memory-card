import Score from './Score'

const DisplayScore = props => {
  let { scoreValue, bestScoreValue } = props

  return (
    <div className='display-score'>
      <Score title='Score' value={scoreValue} />
      <Score title='Best Score' value={bestScoreValue} />
    </div>
  )
}

export default DisplayScore
