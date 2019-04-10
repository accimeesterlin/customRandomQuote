import React from 'react';


const QuoteCharacter = ({ handleChange, handleSubmit, firstName, lastName }) => {

    // JSX
    return(
        <form onSubmit={handleSubmit}>
            <div className="form-control">
                <input 
                    type="text" 
                    onChange={handleChange}
                    name="firstName"
                    value={firstName}
                    placeholder="Enter first name..."/>
            </div>

            <div className="form-control">
                <input 
                    type="text" 
                    onChange={handleChange}
                    name="lastName"
                    value={lastName}
                    placeholder="Enter last name..."/>
            </div>

            <button>Change character</button>
        </form>
    );
};

export default QuoteCharacter;