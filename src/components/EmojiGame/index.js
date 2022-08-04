/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import './index.css'

import {Component} from 'react'

import NavBar from '../NavBar'

import EmojiCard from '../EmojiCard'

import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {score: 0, topScore: 0, idOfClickedEmojis: [], isComplete: false}

  onClickedEmoji = id => {
    const {idOfClickedEmojis, score, topScore} = this.state
    if (idOfClickedEmojis.includes(id)) {
      if (score > topScore) {
        this.setState({topScore: score, isComplete: true})
      } else {
        this.setState({isComplete: true})
      }
    } else if (score === 11) {
      this.setState({
        score: 12,
        topScore: 12,
        isComplete: true,
      })
    } else {
      this.setState(prevState => ({
        idOfClickedEmojis: [...prevState.idOfClickedEmojis, id],
        score: prevState.score + 1,
      }))
    }
  }

  playNewGame = () => {
    this.setState({score: 0, idOfClickedEmojis: [], isComplete: false})
  }

  render() {
    const {score, topScore, isComplete} = this.state

    const shuffledEmojisList = () => {
      const {emojisList} = this.props
      return emojisList.sort(() => Math.random() - 0.5)
    }

    return (
      <div className="bg-container">
        <NavBar isComplete={isComplete} score={score} topScore={topScore} />
        <div className="container">
          {isComplete && (
            <WinOrLoseCard score={score} playNewGame={this.playNewGame} />
          )}

          {!isComplete && (
            <div className="emoji-container">
              {shuffledEmojisList().map(eachItem => (
                <EmojiCard
                  key={eachItem.id}
                  eachItem={eachItem}
                  onClickedEmoji={this.onClickedEmoji}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
