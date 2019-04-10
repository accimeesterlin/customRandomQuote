import React from 'react';


const QuoteSelection = ({ onSelect }) => {

    // JSX
    return(
        <div style={Styles.selection}>
            <p>Get quotes by: </p>
            <select onChange={onSelect}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="4">4</option>
                <option value="8">8</option>
            </select>
        </div>
    );
};

const Styles = {
    selection: {
        display: 'flex',
        alignItems: 'center'
    }
};

export default QuoteSelection;