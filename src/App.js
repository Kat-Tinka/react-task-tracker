// If we want to use a class based component, we do have to import react from 'react' and also call it (same thing) app, but we need to extends react.Component, because we need all the life cycle methods. Then we need a "render" , who take scare of the output and a "return" with an h1/ etc.
// import React from "react";

import Header from "./components/Header";

const App = () => {
  return (
    <div className="container">
      <Header title="Hello!" />
    </div>
  );
};

// class App extends React.Component {
//   render() {
//     return <h1>Hello from a class</h1>;
//   }
// }

export default App;
