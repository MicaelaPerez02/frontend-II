import "./App.css";
import Card from "./components/Card";
import { characters } from "./data";

function App() {
  return (
    <>
      <h1>Compound Components</h1>
      <main>
        {characters.map((character) => (
          <Card key={character.id}>
			<Card.Body>
				<Card.Img src={character.image} alt={character.title} />
				<Card.Title>{character.title}</Card.Title>
				<Card.Desc>{character.desc}</Card.Desc>
				<Card.Status>{character.status}</Card.Status>
			</Card.Body>
		  </Card>
        ))}
      </main>
    </>
  );
}

export default App;
