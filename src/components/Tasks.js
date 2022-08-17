// new file "Tasks.js" created  with a variable called tasks and set that to an array-> paste differents tasks (=> object) with id, text,day, reminder:true/false (boolean value)-> becuae we don't want this to be part od our component, we want this to be part of our state, therefore we will change this later
// => so we first start here a demo, to loop through these tasks and see the output-> by creating a list ,by using the map().array Method

// TASK LIST:
const tasks = [
  {
    id: 1,
    text: "Doc Appointment",
    day: "Aug 17th at 4:30 pm",
    reminder: true,
  },
  {
    id: 2,
    text: "Kingas Birthday",
    day: "Aug 23th at 8:30 pm",
    reminder: true,
  },
  {
    id: 3,
    text: "Supermarket Shopping",
    day: "Aug 27th at 9:00 am",
    reminder: false,
  },
];

// =>LOOP through the tasks and see the output-> by creating a list ,by using the MAP().ARRAY METHOD
const Tasks = () => {
  return (
    <>
      {tasks.map((task) => (
        <h3 key={task.id}>{task.text}</h3>
      ))}
    </>
  );
};
// =>nothing will be visible yet, because we haven't brought in the task component yet(go to=> App.js and import Tasks)

export default Tasks;
