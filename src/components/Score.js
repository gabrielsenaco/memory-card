const Score = (props) => {
  let {title, value} = props

  return (
      <div className={'score '+title}>
        <h5 className='score-title'>{title}</h5>
        <p className='score-value'>{value}</p>
      </div>
    )
}

export default Score
