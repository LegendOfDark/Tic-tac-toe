import React from 'react'
import './Overlay.css'
import gif1 from '../../assets/win-folder/1.gif'
import gif2 from '../../assets/win-folder/2.gif'
import gif3 from '../../assets/win-folder/3.gif'
import gif4 from '../../assets/win-folder/4.gif'
import gif5 from '../../assets/win-folder/5.gif'

import tie1 from '../../assets/tie-folder/6.jpeg'
import tie2 from '../../assets/tie-folder/7.png'
import tie3 from '../../assets/tie-folder/8.jpeg'
import tie4 from '../../assets/tie-folder/9.jpeg'
import tie5 from '../../assets/tie-folder/10.jpeg'


const win_arr = [gif1, gif2, gif3, gif4, gif5]
const tie_arr = [tie1, tie2, tie3, tie4, tie5]

function Overlay(props) {
    let randomItem;
    let displayText;

    if (props.status) {
        randomItem = win_arr[Math.floor(Math.random() * win_arr.length)]
        displayText = `${props.status} won !!!`
    }
    else {
        randomItem = tie_arr[Math.floor(Math.random() * tie_arr.length)]
        displayText = "Nice job, it's a tie"
    }


    return (
        <div className="overlay-background">
            <div className="overlay">
                <h2 className="overlay-title">{displayText}</h2>
                <img className="img" src={randomItem}></img>
                <button className="button" onClick={refreshPage}>Play Again</button>
            </div>
        </div>
    )
}

function refreshPage(){
    setTimeout(() => {
        window.location.reload();
    }, 500);
} 

export default Overlay;