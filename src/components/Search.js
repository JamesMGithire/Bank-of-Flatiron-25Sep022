import React from "react";

function Search({handleChange}) {
  // pass down setTransactions function set the new transactions list
  // pass down a handleChange function that will set the new transaction list.

  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        onChange={handleChange}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;
