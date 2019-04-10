import React from "react";

const ListOfQuotes = ({ quotes, onHover, currentIndex }) => {
  // JSX
  return (
    <div>
      <p>List of Quotes</p>
      {quotes.map((quote, index) => (
        <div
          style={Styles.quoteContainer}
          className="quote-container"
          key={index}
          onMouseOver={() => onHover(index)}
        >
          <p className="quote">{quote.joke}</p>
          {index === currentIndex ? <a
              class="twitter-share-button"
              target="_blanl"
              href={`https://twitter.com/intent/tweet?text=${quote.joke}`}
            >
              Tweet quote
            </a> : null}
        </div>
      ))}
    </div>
  );
};

const Styles = {
  quoteContainer: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer'
  }
};
export default ListOfQuotes;
