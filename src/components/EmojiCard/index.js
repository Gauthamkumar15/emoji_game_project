// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {eachItem, onClickedEmoji} = props
  const {id, emojiName, emojiUrl} = eachItem

  const onClickEmoji = () => {
    onClickedEmoji(id)
  }

  return (
    <li className="emoji-card">
      <button onClick={onClickEmoji} type="button">
        <img className="image" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
