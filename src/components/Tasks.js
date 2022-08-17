//-> because we don't want this to be seperate from our component, we want this to be part of our STATE, therefore we will change this NOW:
// TASK LIST:deleted const Tasks and cutted out Array itsself
// to use state inside of a function, I use a HOOK called useState from 'react' directly
// then above the return we use const[tasks, setTasks] and also a function to update this state (setTasks)
// in the useState-parenthesis()is the default that I want to use for this peace of state for my tasks-> so just paste in the earlier cutted out array of tasks

import { useState } from "react";

const Tasks = () => {
  const [tasks, setTasks] = useState([
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
  ]);
  return (
    <>
      {tasks.map((task) => (
        <h3 key={task.id}>{task.text}</h3>
      ))}
    </>
  );
};
// =>after passing in the tasks-array as the default useState(), there will be no changes visible, because this tasks-variable will still be used in the return with tasks.map, but except of having it come from outside of our component, it's now part of my component state

export default Tasks;
