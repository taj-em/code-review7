import React from 'react';
import SackList from './SackList';
import SackOrder from './SackOrder';

class PageControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <SackOrder />
      buttonText = "Back To Sack List"
    } 
    else {
      currentlyVisibleState = <SackList />
      buttonText = "Buy A Sack"
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    )
    }
  }

export default PageControl;