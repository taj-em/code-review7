import React from 'react';
import SackList from './SackList';
import SackOrder from './SackOrderForm';

class PageControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      sackList: []
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  handleOrderingSack = (newSack) => {
    const newSackList = this.state.sackList.concat(newSack);
    this.setState({sackList: newSackList,
    formVisibleOnPage: false})
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <SackOrder />
      buttonText = "Back To Sack List"
    } 
    else {
      currentlyVisibleState = <SackList sackListProp = {this.state.sackList}/>
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