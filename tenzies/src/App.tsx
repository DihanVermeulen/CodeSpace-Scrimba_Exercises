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
  const [tenzies, setTenzies] = useState<boolean>(false);
  const { width, height } = useWindowSize();

  useEffect(() => {
    const allHeld = dice.every((die) => die.isHolding);
    const firstValue = dice[0].value;
    const allSameValue = dice.every((die) => die.value === firstValue);
    if (allHeld && allSameValue) {
      setTenzies(true);
    }
  }, [dice]);

  const rollDice = () => {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.isHolding ? die : generateDie();
      })
    );
  };

  const holdDice = (id: string) => {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.id === id ? { ...die, isHolding: !die.isHolding } : die;
      })
    );
  };

  const handleRollDice = () => {
    const interval = setInterval(() => {
      rollDice();
    }, 50);

    setTimeout(() => {
      clearInterval(interval);
    }, 1000);
  };

  const resetGame = () => {
    setTenzies(false);
    setDice(createNewDice());
  };

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
