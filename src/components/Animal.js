import './Animal.css';

//The responspibility of this component is to be a resuable UI element that displacs an animal's
// -name
// -Species
// -photo
const Animal = () => {
    return (<section className="Animal">
        <h3>Animal name: Keiks</h3>
        <p>Species: Dog</p>
        <img src="https://placedog.net/640/480?r" alt="dog"></img>
    </section>)
};

export default Animal;