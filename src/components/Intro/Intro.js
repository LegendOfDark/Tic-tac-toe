import icon from '../../assets/icon.png';
import React from 'react';
import './Intro.css';
import Title from '../Title/Title'

class Intro extends React.Component{ 

  constructor(){
    super()
    this.state = {
      buttonClicked: false
    }
  }

  onPlayClick = () => {
    this.setState({ buttonClicked : true})
    this.props.buttonClickHandler();
  }

  render(){
  return(
    <div className="Intro">
      <header className="Intro-header">
          <Title />
          <img src="https://cdn.dribbble.com/users/108183/screenshots/5288723/media/dfe7b7331a33aae7b483343f14106a9c.gif" 
          className="Intro-logo" 
          alt="logo" />
          <div  className={`Intro-circle ${this.state.buttonClicked ? 'Intro-circle-animation' : ''}`}></div>

        <div className="Intro-text">
          <p>
            Press start to play!
          </p>
          <img className="icon" src={icon}  onClick={this.onPlayClick}/>
        </div>
      </header>
    </div>
  )
      }
}

export default Intro;