import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";

const apiBaseAddress = "http://localhost:4000/transactions";

class AccountContainer extends Component {
  state = {
    transactions: [],
    searchValue: ''
  };

  componentDidMount() {
    fetch(apiBaseAddress)
      .then(r => r.json())
      .then(transactions => this.setState({ transactions }));
  }

  handleChange = (event) => {
    this.setState({searchValue:event.target.value},
      function() {
        this.renderTransactions()
      }
    )
  }

  renderTransactions = () =>{
    let transaction = this.state.transactions
      return transaction.filter(Obj =>{
        return Obj.description.toLowerCase()
        .includes(this.state.searchValue.toLowerCase())
      })
  }





  render() {
    return (
      <div>
        <Search
          handleChange={this.handleChange}
          searchValue={this.state.searchValue}
        />
        <TransactionsList
          transactions={this.renderTransactions()}
          sortTrans={this.sortTrans}
        />
      </div>
    );
  }
}

export default AccountContainer;
