import Header from "./components/Header";
//After created a Taskks.js-File and a task list and looped over the tasks ( .map()-Method => output : a jsx=> "list", so teh parent of that list ( in this case <h3> should have a key prop, which should be something unique (go for that back to Tasks.js) )), we import the Tasks to the App.js-file
import Tasks from "./components/Tasks";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Tasks />
    </div>
  );
};

Header.defaultProps = {
  title: "Task Tracker!",
};

export default App;
