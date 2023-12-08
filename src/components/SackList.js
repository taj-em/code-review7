import React from 'react';
import Sack from './Sack';
import PropTypes from 'prop-types';

// function SackList(props) {
//     return (
//       <React.Fragment>
//         <hr />
//         {props.sackListProp.map((sack, index) => // Loop through the list passed down from TicketControl.
//           <Sack name={sack.name}
//             origin={sack.origin}
//             price={sack.price}
//             roast={sack.roast}
//             key={index} />
//         )}
//       </React.Fragment>
//     )
//   }

// SackList.propTypes = {
//   sackListProp: PropTypes.array
// }

// export default SackList;

function SackList(props) {
    return (
      <React.Fragment>
        <h3>Bean Type: {props.SackList}</h3>
      </React.Fragment>
    )
  }

  export default SackList;