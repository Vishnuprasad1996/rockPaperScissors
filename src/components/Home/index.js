import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'

import PlayingView from '../PlayingView'
import GameResultView from '../GameResultView'

import './index.css'

class Home extends Component {
  state = {
    activeButtonId: '',
    ActiveOpponentId: '',
    score: 0,
    isRPSButtonClicked: false,
    winningStatus: '',
  }

  onClickRPSButton = userChoiceId => {
    const {choicesList} = this.props
    const opponentChoiceRandom = Math.floor(Math.random() * choicesList.length)
    const opponentChoiceId = choicesList[opponentChoiceRandom].id
    this.setState({
      activeButtonId: userChoiceId,
      isRPSButtonClicked: true,
      ActiveOpponentId: opponentChoiceId,
    })

    if (userChoiceId === 'PAPER' && opponentChoiceId === 'ROCK') {
      this.setState(prevState => ({score: prevState.score + 1}))
      this.setState({winningStatus: 'win'})
    } else if (userChoiceId === 'ROCK' && opponentChoiceId === 'SCISSORS') {
      this.setState(prevState => ({score: prevState.score + 1}))
      this.setState({winningStatus: 'win'})
    } else if (userChoiceId === 'SCISSORS' && opponentChoiceId === 'PAPER') {
      this.setState(prevState => ({score: prevState.score + 1}))
      this.setState({winningStatus: 'win'})
    } else if (userChoiceId === 'ROCK' && opponentChoiceId === 'PAPER') {
      this.setState(prevState => ({score: prevState.score - 1}))
      this.setState({winningStatus: 'lose'})
    } else if (userChoiceId === 'SCISSORS' && opponentChoiceId === 'ROCK') {
      this.setState(prevState => ({score: prevState.score - 1}))
      this.setState({winningStatus: 'lose'})
    } else if (userChoiceId === 'PAPER' && opponentChoiceId === 'SCISSORS') {
      this.setState(prevState => ({score: prevState.score - 1}))
      this.setState({winningStatus: 'lose'})
    } else {
      this.setState(prevState => ({score: prevState.score + 0}))
      this.setState({winningStatus: 'draw'})
    }
  }

  onClickPlayAgainButton = () => {
    this.setState({
      isRPSButtonClicked: false,
    })
  }

  renderPlayingView = choicesList => (
    <>
      {choicesList.map(eachList => (
        <PlayingView
          key={eachList.id}
          choicesListDetails={eachList}
          onClickRPSButton={this.onClickRPSButton}
        />
      ))}
    </>
  )

  renderResultView = choicesList => {
    const {activeButtonId, ActiveOpponentId, winningStatus} = this.state
    return (
      <GameResultView
        choicesList={choicesList}
        activeButtonId={activeButtonId}
        ActiveOpponentId={ActiveOpponentId}
        onClickPlayAgainButton={this.onClickPlayAgainButton}
        winningStatus={winningStatus}
      />
    )
  }

  render() {
    const {choicesList} = this.props
    const {isRPSButtonClicked, score} = this.state

    return (
      <div className="app-bg-container">
        <div className="app-content-cont ">
          <div className="score-cont-desc">
            <h1 className="name">
              Rock <br />
              Paper <br />
              Scissors
              <br />
            </h1>
            <div className="score-cont">
              <p className="score">SCORE</p>
              <p className="score">{score}</p>
            </div>
          </div>
          <div className="play-result-cont">
            {isRPSButtonClicked
              ? this.renderResultView(choicesList)
              : this.renderPlayingView(choicesList)}
          </div>
          <div className="rules-popup-cont">
            <Popup
              modal
              trigger={
                <button type="button" className="rules-button">
                  RULES
                </button>
              }
              className="popup-content"
            >
              {close => (
                <div className="model-container">
                  <button
                    className="close-button"
                    type="button"
                    onClick={() => close()}
                  >
                    <RiCloseLine size={20} />
                  </button>
                  <div className="rules-img-cont">
                    <img
                      className="rules-img"
                      src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                      alt="rules"
                    />
                  </div>
                </div>
              )}
            </Popup>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
