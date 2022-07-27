import {
  ResultBg,
  ResultContent,
  UserSelectedButton,
  SelectedDesc,
  OpponentSelected,
  Content,
  PlayAgainButton,
  Result,
} from './StyledComponents'

const GameResultView = props => {
  const {
    choicesList,
    onClickPlayAgainButton,
    activeButtonId,
    ActiveOpponentId,
    winningStatus,
  } = props

  const buttonPlayAgain = () => {
    onClickPlayAgainButton()
  }

  const userChoice = choicesList.find(
    eachList => eachList.id === activeButtonId,
  )

  const opponentChoice = choicesList.find(
    eachList => eachList.id === ActiveOpponentId,
  )

  const renderResultDesc = () => {
    switch (winningStatus) {
      case 'win':
        return <Result>YOU WON</Result>
      case 'lose':
        return <Result>YOU LOSE</Result>
      case 'draw':
        return <Result>IT IS DRAW</Result>
      default:
        return null
    }
  }

  console.log(opponentChoice)

  return (
    <ResultBg>
      <ResultContent>
        <Content>
          <SelectedDesc>YOU</SelectedDesc>
          <UserSelectedButton src={userChoice.imageUrl} alt="your choice" />
        </Content>
        <Content>
          <SelectedDesc>OPPONENT</SelectedDesc>
          <OpponentSelected
            src={opponentChoice.imageUrl}
            alt="opponent choice"
          />
        </Content>
      </ResultContent>
      {renderResultDesc()}
      <PlayAgainButton type="button" onClick={buttonPlayAgain}>
        Play Again
      </PlayAgainButton>
    </ResultBg>
  )
}

export default GameResultView
