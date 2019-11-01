import React from 'react'
import Tile from './Tile'
// import newArray from '../porkers_data.js'

export default class TileContainer extends React.Component {

  state = {
    sort : "name",
  }

  onChange = (event) => {this.setState({sort: event.target.value})}


  renderTiles = () => {
    let mutateArray

    if (this.state.sort === 'greased'){
      mutateArray = this.props.porkers.filter((a) => a.greased === true )
    } else if (this.state.sort === 'weight') {
      mutateArray = [...this.props.porkers].sort((a, b) => (a.weight > b.weight) ? 1 : -1 )
    } else {
      mutateArray = [...this.props.porkers].sort((a,b) => (a.name > b.name) ? 1 : -1)
    }
    return mutateArray.map(pork => < Tile porkInfo={pork} key={pork.id}/>)
  }


  render(){
    return (
      <div>
        <select onChange={this.onChange}>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
          <option value="greased">Greased</option>
        </select>
        <div className="ui grid container">
          {this.renderTiles()}
        </div>
      </div>
    )
  }

}
