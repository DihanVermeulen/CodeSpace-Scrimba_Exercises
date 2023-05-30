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
          <button className="roll__button">Roll</button>
        </div>
      </Layout>
    </>
  );
}

export default App;
