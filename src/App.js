import './App.css';
import AnimalList from './components/AnimalList';

const ListofAnimals =[ 
  {
      id: 100,
      name: "Violet",
      species: "pit mix"
  },
  {
      id: 202,
      name:"kae",
      species: "dog"
  },
  {
      id: 303, 
      name:"amber",
      species: "dog",
      photo: "https://placedog.net/640/480?r"
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
