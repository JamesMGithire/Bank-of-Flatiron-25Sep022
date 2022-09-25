import React from "react";

function AddTransactionForm({ submit }) {
  // original transactions
  // new transaction
  // POST newtransactions to API
  // Fetch new list transactions

  // event.preventDefault();
  // setFormData({
  //   ...formData,
  //   [event.target.name]: event.target.value,
  // });
  const [formData, setFormData] = React.useState({})
  function handleChange(event) {
    setFormData({
      ...formData,[event.target.name]:event.target.value
    })
  }

  function getSubmitData(e) {
    e.preventDefault();
    submit(formData)
  }
  return (
    <div className="ui segment">
      <form className="ui form" >
        <div className="inline fields">
          <input type="date" name="date" onBlur={handleChange} />
          <input type="text" name="description" placeholder="Description" onBlur={handleChange} />
          <input type="text" name="category" placeholder="Category" onBlur={handleChange} />
          <input type="number" name="amount" placeholder="Amount" step="0.01" onBlur={handleChange} />
        </div>
        <button className="ui button" type="submit" onClick={getSubmitData}>
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
