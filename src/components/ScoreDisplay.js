const ScoreDisplay = (props) => {
  let {title, value} = props

  return (
      <div className='score-display '+title>
        <h5>{title}</h5>
        <p>{value}</p>
      </div>
    )
}

export default ScoreDisplay
