import "./App.css";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <Layout>
        <main className="main__section"></main>
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
