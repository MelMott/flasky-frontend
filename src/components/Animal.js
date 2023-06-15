import './Animal.css';
import PropTypes from 'prop-types';
import React, {useState} from 'react';

//The responspibility of this component is to be a resuable UI element that displacs an animal's
// -name
// -Species
// - age
// -photo (optional?) -- or a default!

// Make a button
// Make an eventhandler for that button
// Configure a piece of state:
    // Decide what the state is .. what is its name, what is its type, what are the available values for this 
        // is Bookmarked .. true or false
        // likesCount ... numbers 0+
        // biography .. {birthyear:, works:}
    // import useState
    // Render the piece of state with an initial value
        // setIsBookmarked
    // Make the even handler update the state
// Test it
//  Style it/add polish

const Animal = (props) => {

    const[isBookmarked, setIsBookmarked] = useState(false);

    const alText = `Photo of ${props.name}`;

    // Responsibility:
    // Event Handler
    // Update the state
    const toggleBookmark = () => {
        setIsBookmarked(!isBookmarked);
    }

    // if animal is bookmarked, the css class name should be .bookmarked
    // if the animal is not bookmarked, there should be no css class
    let animalStyle = '';
    if (isBookmarked) {
        animalStyle = 'Animal bookmarked';
    }

    return (
        <section className={animalStyle}>
        <h3>Animal name: {props.name} </h3>
        <p>Species: {props.species}</p>
        {props.photo ? <img src={props.photo} alt={alText}></img>: "[no photo]"}
        <p><button onClick={toggleBookmark}>Bookmark</button></p>
        <p> Is bookmarked? {isBookmarked ? "Yes this animal is bookmarked" : "No this animal is not bookemarked"}</p>
    </section>)
};

Animal.propTypes = {
    name: PropTypes.string,
    species: PropTypes.string.isRequired,
    adopted: PropTypes.bool,
    age: PropTypes.number,
    photo: PropTypes.string
}

export default Animal;