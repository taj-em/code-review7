import React from 'react';
import SackOrder from './SackOrderForm';
import PropTypes from 'prop-types';

function SackList(props) {
  return (
    <React.Fragment>
      <hr />
      {props.sackList.map((sack, index) => // Loop through the list passed down from TicketControl.
        <SackOrder name={sack.name}
          origin={sack.origin}
          price={sack.price}
          roast={sack.roast}
          key={index} />
      )}
    </React.Fragment>
  )
}

SackList.propTypes = {
  sackList: PropTypes.array
}

export default SackList;