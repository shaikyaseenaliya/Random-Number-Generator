// Write your code here
import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
    state = {count:0}

   onGenerate = () => {

    const num = Math.ceil(Math.random()*100)

    this.setState({count:num})
   }

  render() {

    const {count} = this.state
    return (
      <div className="random-number-app-container">
        <div className="random-number-container">
          <h1 className="random-number-heading">Random Number</h1>
          <p className="random-number-paragraph">
            Generate a random number in the range of 0 to 100
          </p>
          <button type="button" className="random-number-button" onClick={this.onGenerate}>
            Generate
          </button>
          <p className="random-number-para">{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
