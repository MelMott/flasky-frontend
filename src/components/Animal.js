import './Animal.css';
import PropTypes from 'prop-types';

//The responspibility of this component is to be a resuable UI element that displacs an animal's
// -name
// -Species
// - age
// -photo (optional?) -- or a default!
const Animal = (props) => {
    return (<section className="Animal">
        <h3>Animal name: {props.name} </h3>
        <p>Species: {props.species}</p>
        <img src="https://placedog.net/640/480?r" alt="dog"></img>
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