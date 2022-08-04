// Write your code here.
// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {score, playNewGame} = props
  const winOrLoss = score === 12 ? 'You Won' : 'You Lose'
  const scoreText = score === 12 ? 'Best Score' : 'Score'
  const image =
    score === 12
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const playAgain = () => {
    playNewGame()
  }

  return (
    <div className="game-result">
      <div className="result">
        <h1 className="heading">{winOrLoss}</h1>
        <p className="score1">{scoreText}</p>
        <p className="value">{score}/12</p>
        <button className="button" onClick={playAgain} type="button">
          Play Again
        </button>
      </div>
      <div className="image">
        <img className="image2" src={image} alt="win or lose" />
      </div>
    </div>
  )
}

export default WinOrLoseCard
