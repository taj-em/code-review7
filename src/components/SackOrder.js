import React from "react";

function OrderSack(props) {

  function handleSackOrderSubmission(event) {

  }

  return (
    <React.Fragment>
      <form onSubmit={handleSackOrderSubmission}>
        <input
          type='text'
          name='bean-name'
          placeholder='Bean Name:' />
        <input
          type='text'
          name='origin'
          placeholder='Origin' />
        <input
          type='number'
          name='price'
          placeholder='Price:' />
        <input
          type='text'
          name='roast'
          placeholder='Roast:' />
        <button type='submit'>Confirm Order</button>
      </form>
    </React.Fragment>
  );
}

export default OrderSack;