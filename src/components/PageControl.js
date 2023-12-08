import React from 'react';
import SackList from './SackList';
import SackOrderForm from './SackOrderForm';

class PageControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      sackList: []
    };
  }

  // Functions Correctly
  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  // Functions Correctly
  handleOrderingSack = (newSack) => {
    const newSackList = this.state.sackList.concat(newSack);
    this.setState({sackList: newSackList,
    formVisibleOnPage: false})
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <SackOrderForm onNewSackOrder = {this.handleOrderingSack}/>
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
        <SackList sackList = {this.state.sackList} />
      </React.Fragment>
    )
    }
  }

export default PageControl;