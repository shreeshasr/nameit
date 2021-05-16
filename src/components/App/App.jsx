import React from 'react';
import Header from '../Header/Header';
import './App.css';
import Searchbox from '../Searchbox/Searchbox'
import Results from '../Results/Results';

const name = require(`@rstacruz/startup-name-generator`)
class App extends React.Component{
    state = {
        headerText : "Name It!",
        headerExpanded: true,
        suggestedNames: [],
    }

    handleInputChange = (inputText) => {
      this.setState({
        headerExpanded: !inputText,
        suggestedNames: inputText ? name(inputText) : []
      });
    }
    render(){
       return(
           <div>
                <Header headerExpanded={this.state.headerExpanded} headTitle={this.state.headerText}/>
                <Searchbox onInputChange={this.handleInputChange}/>
                <Results names={this.state.suggestedNames}/>
           </div> 
       )
    }
}


export default App