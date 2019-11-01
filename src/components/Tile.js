import React from 'react'

export default class Tile extends React.Component {


  state = {
    showSkills: false,
    display: 'block'
  }

  changeState = () => {
    this.setState({showSkills: !this.state.showSkills}) // ? false : true
  }

  renderInfo(){
    return(
      <div>
        <p>Specialty: {this.props.porkInfo.specialty}</p>
        <p>Weight: {this.props.porkInfo.weight}</p>
        <p>Greased: {`${this.props.porkInfo.greased}`}</p>
        <p>Highest Medal Achieved: {this.props.porkInfo['highest medal achieved']}</p>
      </div>

    )
  }

  debugger

  render(){
    return (
      <div onClick={this.changeState} style={styles} className='ui six wide column' >
        <h3>{this.props.porkInfo.name}</h3>
        <img src={this.props.porkInfo.url} alt=""/>
        { this.state.showSkills ? this.renderInfo() : null }
      </div>
    )
  }
}

let styles = {
  padding: '10px',
  display: 'block' //this.state.display
}
