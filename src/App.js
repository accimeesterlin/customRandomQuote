import React from "react";
import ListOfQuotes from "./components/ListOfQuotes";

import "./App.css";

import API from "./utils/API";
export class App extends React.PureComponent {
  state = {
    quotes: [],
    firstName: "Chuck",
    lastName: "Norris",
    numQuote: 1,
  };

  componentDidMount = () => {
    const { firstName, lastName } = this.state;
    this.getRandomQuotes(1, firstName, lastName);
  };

  getRandomQuotes = (num, firstName, lastName) => {
    API.getRandomQuotes(num, firstName, lastName)
      .then(res => this.setState({ quotes: res.data.value, isError: false }))
      .catch(errors =>
        this.setState({
          errorMessage: errors.message || "Failed loading quotes",
          isError: true
        })
      );
  };


  showQuote = () => {
    if (this.state.quotes.length > 0) {
        return <ListOfQuotes 
          quotes={this.state.quotes} 
          onHover={this.onHover} />;
    }
  };

  handleSubmit = event => {
    event.preventDefault();
    const { firstName, lastName, numQuote } = this.state;
    this.getRandomQuotes(numQuote, firstName, lastName);
    this.setState({ isCharacterEnabled: false });
  };

  displayErrorMessage = () => {
    const { isError } = this.state;

    if (isError) {
      return <p className="error">Error - {this.state.errorMessage || 'Not able to fetch quotes'}</p>
    }
  };
  render() {
    return (
      <div className="App">
        {this.displayErrorMessage()}
        <div className="App_header">
          <button onClick = {this.handleSubmit}>Get new quote</button>
        </div>
        <div className="App_content">{this.showQuote()}</div>
      </div>
    );
  }
}

export default App;
