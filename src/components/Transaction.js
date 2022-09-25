import React from "react";

function Transaction({ transactionObj, handleDeletion }) {
  // onclick = removes from transactions
  // Delete method on API
  // or
  // Delete method on API
  // fetch the list in the API
  const { id,date, description, category, amount } = transactionObj;
  return (
    <tr onClick={()=>handleDeletion(id)}>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
    </tr>
  );
}

export default Transaction;