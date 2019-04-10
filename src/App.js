import React from "react";
import ListOfQuotes from "./components/ListOfQuotes";
import QuoteCharacter from "./components/QuoteCharacter";
import QuoteSelection from "./components/QuoteSelection";

import "./App.css";

import API from "./utils/API";
export class App extends React.PureComponent {
  state = {
    quotes: [],
    firstName: "Chuck",
    lastName: "Norris",
    errorMessage: "",
    numQuote: 1,
    isError: false,
    isCharacterEnabled: false,
    currentIndex: null
  };

  componentDidMount = () => {
    const { firstName, lastName } = this.state;
    this.getRandomQuotes(1, firstName, lastName);
  };

  getRandomQuotes = (num, firstName, lastName) => {
    API.getRandomQuotes(num, firstName, lastName)
      .then(res => this.setState({ quotes: res.data.value }))
      .catch(errors =>
        this.setState({
          errorMessage: errors.message || "Failed loading quotes",
          isError: true
        })
      );
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  onSelect = event => {
    const num = event.target.value;
    const { firstName, lastName } = this.state;
    this.setState({ numQuote: num });
    this.getRandomQuotes(num, firstName, lastName);
  };

  handleSubmit = event => {
    event.preventDefault();
    const { firstName, lastName, numQuote } = this.state;
    this.getRandomQuotes(numQuote, firstName, lastName);
    this.setState({ isCharacterEnabled: false });
  };

  onHover = (index) => {
    this.setState({ currentIndex: index });
  };

  showQuote = () => {
    if (this.state.quotes.length > 0) {
        return <ListOfQuotes 
          quotes={this.state.quotes} 
          onHover={this.onHover} 
          currentIndex={this.state.currentIndex} />;
    }
  };

  changeCharacterName = () => {
    this.setState({ isCharacterEnabled: !this.state.isCharacterEnabled });
  };

  showCharacter = () => {
    const { isCharacterEnabled } = this.state;

    if (isCharacterEnabled) {
      return (
        <QuoteCharacter
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          changeCharacterName={this.changeCharacterName}
        />
      );
    }
    return <button onClick = {this.changeCharacterName}>Change character name</button>;
  };

  render() {
    return (
      <div className="App">
        <div className="App_header">
          <QuoteSelection onSelect={this.onSelect} />
          <button onClick = {this.handleSubmit}>Get new quote</button>
          {this.showCharacter()}
        </div>
        <div className="App_content">{this.showQuote()}</div>
      </div>
    );
  }
}

export default App;
