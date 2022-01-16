import React from 'react';
import Box from '../Box/Box'
import './Board.css'
import Title from '../Title/Title'

function Board(props){

    let list = props.state.boardState
    // console.log(list)
    
    let board = list.map((item, key) => {
        return <Box updateBoard={props.updateBoard} key={key} id={key} status={item}/>
    })
    // console.log(board)

    return (
        <div>
            <Title />
            <div className="parent">
                {board}
            </div>
        </div>
    )
}


export default Board;