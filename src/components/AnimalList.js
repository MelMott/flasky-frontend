import './AnimalList.css'
import Animal from './Animal';
import PropTypes from 'prop-types';

const AnimalList =({ListofAnimals}) => {
    // const listofAnimals = props.listofAnimals;
    // const {ListofAnimals} =props;

    return(
    <section className='AnimalList'>
        <h2>Animal List</h2>
        <ul className='AnimalList__list'>
        {
            ListofAnimals.map((creature) =>(
                <li key={creature.id}>
                    <Animal
                        name={creature.name}
                        species={creature.species}
                        photo={creature.photo}
                    />
                </li>
            ))
        }
        </ul>
    </section>)
};

AnimalList.propTypes ={
    ListofAnimals: PropTypes.arrayOf(
        PropTypes.shape({
        name: PropTypes.string,
        id: PropTypes.number.isRequired,
        species: PropTypes.string.isRequired,
        adopted: PropTypes.bool,
        age: PropTypes.number,
        photo: PropTypes.string
        })
    )
}

export default AnimalList;