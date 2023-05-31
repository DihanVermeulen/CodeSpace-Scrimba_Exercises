import "./App.css";
import Layout from "./components/Layout";

function App() {
  const generateDie = () => {
    return {
      value: Math.floor(Math.random() * 6) + 1,
      isHolding: false,
      id: uuidv4(),
    };
  };

  const createNewDice = () => {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(generateDie());
    }
    return newDice;
  };

  const [dice, setDice] = useState(createNewDice());
  return (
    <>
      <Layout>
        <main className="main__section">
          {dice.map((die) => (
            <Die
              key={die.id}
              value={die.value}
              id={die.id}
              isHolding={die.isHolding}
              holdDice={() => holdDice(die.id)}
            />
          ))}
        </main>
        <div className="space" />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {!tenzies ? (
            <button onClick={handleRollDice} className="roll__button">
              Roll
            </button>
          ) : (
            <button onClick={resetGame} className="roll__button">
              Reset
            </button>
          )}
        </div>
      </Layout>
    </>
  );
}

export default App;
