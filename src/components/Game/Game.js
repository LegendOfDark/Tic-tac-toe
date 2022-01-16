import React, { Component } from 'react'
import './Game.css';
import Board from '../Board/Board'
import JSConfetti from 'js-confetti'
import Overlay from '../Overlay/Overlay'

const jsConfetti = new JSConfetti()

class Game extends Component {
  constructor() {
    super()
    this.state = {
      player1: true,
      boardState: ['', '', '', '', '', '', '', '', ''],
      game_end: false,
      win: undefined
    }
  }

  winChecker = (map) => {
    let emptyStringCount = 0;
    map.map((item) => {
      item === '' && emptyStringCount++
    })

    if (emptyStringCount > 5) return null
    for (let x = 0; x < 9; x = x + 3) {
      if (map[x] !== '' && map[x] === map[x + 1] && map[x] === map[x + 2]) return map[x]
    }
    for (let y = 0; y < 3; y++) {
      if (map[y] !== '' && map[y] === map[y + 3] && map[y] === map[y + 6]) return map[y]
    }
    if (map[0] !== '' && map[0] === map[4] && map[0] === map[8]) return map[4]
    else if (map[2] !== '' && map[2] === map[4] && map[2] === map[6]) return map[4]

    if (emptyStringCount === 0) return 'tie'

  }

  updateBoard = (props) => {
    let game_end = false;
    let win = undefined;
    this.setState((oldstate) => {
      if (oldstate.boardState[props.id] !== '') return { oldstate }

      oldstate.boardState[props.id] = (oldstate.player1 === true ? 'check' : 'cross')
      oldstate.player1 = !oldstate.player1
      let return_val = this.winChecker(this.state.boardState)
      console.log(this.state.boardState, " ", return_val)
      if (return_val === 'check' || return_val === 'cross') {
        game_end = true;
        win = return_val === 'check' ? "Player 1" : "Player 2"
        jsConfetti.addConfetti({
          confettiRadius: 6,
          confettiNumber: 500,
        })
      }
      else if (return_val) {
        game_end = true;
      }


      // show tie or who won
      // display overlay soon as win or loss
      // make title a component
      // responsive for mobiles

      //Bonus: Figure out the play images
      return {
        game_end,
        win,
        boardState: oldstate.boardState,
        player1: oldstate.player1
      }
    })
  }

  render() {
    return (
      <div className="game">
        {this.state.game_end && <Overlay status={this.state.win} />}
        <div className="circle-container">
          <div className="circle circle-animation"></div>
        </div>

        <Board updateBoard={this.updateBoard} state={this.state} clicked={null} />

      </div>
    )
  }
}


export default Game;
