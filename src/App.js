import { useState } from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";





function App() {

  const setAllDone = () => {
    setTasks(tasks => tasks.map(task => {
      return {
        ...task,
        done: true,
      }
    }));
  };

  const toggleTaskDone = (id) => {
    setTasks(tasks => tasks.map(task => {
      if (task.id === id) {
        return { ...task, done: !task.done };
      }
      return task;
    }
    ));
  };

  const [tasks, setTasks] = useState([
    { id: 1, content: "obejrzeć mecz", done: false },
    { id: 2, content: "zjeść obiad", done: true },
  ]);

  const removeTasks = (id) => {
    setTasks(tasks => tasks.filter(
      task => task.id !== id));
  };

  const [hideDone, setHideDone] = useState(false)

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone)
  }

  return (
    <Container>
      <Header
        tittle="Lista zadań"
      />

      <Section
        tittle="Dodaj nowe zadanie"
        body={< Form />}
      />

      <Section
        tittle="Lista zadań"
        body={
          <Tasks
            tasks={tasks}
            hideDone={hideDone}
            removeTasks={removeTasks}
            toggleTaskDone={toggleTaskDone}
          />}
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
            setAllDone={setAllDone} />}
      />

    </Container>

  );
}

export default App;
