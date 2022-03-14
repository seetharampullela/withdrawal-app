// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominationsDetails, changeBalance} = props
  const {value} = denominationsDetails

  const changeDenomination = () => {
    changeBalance(value)
  }
  return (
    <li>
      <button type="button" className="button" onClick={changeDenomination}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
