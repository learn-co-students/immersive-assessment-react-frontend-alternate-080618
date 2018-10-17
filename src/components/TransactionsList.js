import React, {Component} from "react";
import Transaction from './Transaction'

class TransactionsList extends Component {

  state={
    list: this.props.transactions
  }

  sortByDate = () => {
  this.setState({
    list: this.props.transactions.sort((a,b) => a['posted_at'] < b['posted_at'] ? -1 : 1)
  })
}
sortByDescription= () => {
  this.setState({
    list: this.props.transactions.sort((a,b) => a.description < b.description ? -1 : 1)
  })
}
sortByCategory = () => {
  this.setState({
    list: this.props.transactions.sort((a,b) => a.category < b.category ? -1 : 1)
  })
}
sortByAmount = () => {
  this.setState({
    list: this.props.transactions.sort((a,b) => a.amount < b.amount ? -1 : 1)
  })
}





  render(){
  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr >
          <th  onClick={this.sortByDate}>
            <h3 className="ui center aligned header">Posted At</h3>
          </th>
          <th   onClick={this.sortByDescription}>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th    onClick={this.sortByCategory}>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th   onClick={this.sortByAmount}>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
        { this.props.transactions.map(transaction =>
          <Transaction key={transaction.id} transactions={transaction} />
          )
        }
      </tbody>
    </table>
  );
};

}
export default TransactionsList;
