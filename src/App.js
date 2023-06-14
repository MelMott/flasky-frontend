import logo from './logo.svg';
import './App.css';

import Animal from './components/Animal';
import AnimalList from './components/AnimalList';

const ListofAnimals =[ 
  {
      name: "Violet",
      species: "pit mix"
  },
  {
      name:"kae",
      species: "dog"
  },
  {
      name:"amber",
      species: "dog",
      photos: "placedog"
  }
];

function App() {
  return (
    <section>
      <h1> The Sapphire Animal Adoption Agency</h1>
      <h2> Animal Listings</h2>
      <AnimalList ListofAnimals={ListofAnimals}></AnimalList>
    </section>
  );
}

export default App;
