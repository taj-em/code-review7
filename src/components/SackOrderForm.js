import React from "react";
import { v4 } from 'uuid';

function SackOrderForm(props) {

  function handleSackOrderSubmission(event) {
    event.preventDefault();
    props.onNewSackOrder({
      name: event.target.name.value,
      origin: event.target.origin.value,
      price: event.target.price.value,
      roast: event.target.roast.value,
      id: v4()
    }
    )
  }

  return (
    <React.Fragment>
      <form onSubmit={handleSackOrderSubmission}>
        <input
          type='text'
          name='beanName'
          placeholder='Bean Name:' />
        <input
          type='text'
          name='origin'
          placeholder='Origin:' />
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

export default SackOrderForm;