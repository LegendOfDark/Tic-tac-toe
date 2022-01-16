import React from 'react'
import './Box.css';
import check from '../../assets/check.png'
import cross from '../../assets/cross.png'




function Box(props) {
    return (
    <div className="box" onClick={() => props.updateBoard(props)}>
        { props.status !== '' && <img className="img" src={(props.status === 'check' ? check : cross)} /> }
    </div>
    )
}

export default Box;