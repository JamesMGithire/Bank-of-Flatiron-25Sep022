import React from "react";
import Transaction from "./Transaction";

function TransactionsList({ transactions, handleSort, handleDeletion }) {
  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header" onClick={handleSort}>Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header" onClick={handleSort}>Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
        {/* render a list of <Transaction> components here */}
        {transactions.map(transactionObj =>
          <Transaction
            key={transactionObj.id}
            handleDeletion={handleDeletion}
            transactionObj={transactionObj} />)}
      </tbody>
    </table>
  );
}

export default TransactionsList;
