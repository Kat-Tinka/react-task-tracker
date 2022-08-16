import Header from "./components/Header";

// If I don't pass anything in >Header/> , I can have default props - but I have to go below the function component an say: Header.defaultProps and set that to an object and set the title to 'Task Tracker!!'

const App = () => {
  return (
    <div className="container">
      <Header title="YESS" />
    </div>
  );
};

// That's the dafault text, but if I put pass something (for example title='YESS') in <Header /> , it would overwrite the dafault text
Header.defaultProps = {
  title: "Task Tracker!!",
};

export default App;
