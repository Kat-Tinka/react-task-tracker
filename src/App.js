import Header from "./components/Header";

function App() {
  const name = "Katinka";
  const x = true;

  return (
    <div className="container">
      <Header title="Hello from" />
      <h2>Hello {name}</h2>
      <h3>Hello {x ? "Yes" : "No"}</h3>
    </div>
  );
}

export default App;
