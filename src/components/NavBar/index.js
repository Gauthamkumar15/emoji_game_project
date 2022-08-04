// Write your code here.
import './index.css'

const NavBar = props => {
  const {isComplete, score, topScore} = props
  return (
    <div className="navbar-bg">
      <div className="logo">
        <img
          className="image1"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1>Emoji Game</h1>
      </div>
      {!isComplete && (
        <div className="score">
          <p>Score: {score}</p>
          <p>Top Score: {topScore}</p>
        </div>
      )}
    </div>
  )
}

export default NavBar
