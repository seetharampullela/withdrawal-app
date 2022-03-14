// Write your code here
import {Component} from 'react'

import './index.css'

import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  changeBalance = value => {
    this.setState(prevState => {
      console.log(prevState.balance)
      return {balance: prevState.balance - value}
    })
  }

  render() {
    const {balance} = this.state
    const {denominationsList} = this.props

    return (
      <div className="container-1">
        <div className="container-2">
          <h1>Sarah Williams</h1>
          <div className="container-3">
            <p>Your balance</p>
            <p>{balance}</p>
          </div>
          <div className="header">
            <p>Withdraw</p>
            <p>CHOOSE SUM (IN RUPEES) </p>
          </div>
          <ul className="list-container">
            {denominationsList.map(each => (
              <DenominationItem
                denominationsDetails={each}
                changeBalance={this.changeBalance}
                key={each.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
