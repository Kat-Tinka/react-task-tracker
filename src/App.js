import Header from "./components/Header";

function App() {
  const name = "Katinka";
  return (
    <div className="container">
      <Header title="Hello from" />
      <h2>Hello {name}</h2>
    </div>
  );
}

export default App;
