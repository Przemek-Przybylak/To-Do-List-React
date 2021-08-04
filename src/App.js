import { useEffect, useState } from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

function App() {
  const [hideDone, setHideDone] = useState(false)
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || [] );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addNewTask = (content) => {

    if (content === "")
      return "";

    (setTasks(tasks => [
      ...tasks,
      {
        content,
        done: false,
        id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
      },
    ])
    )
  };

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

  const removeTasks = (id) => {
    setTasks(tasks => tasks.filter(
      task => task.id !== id));
  };

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone)
  };

  return (
    <Container>
      <Header
        tittle="Lista zadań"
      />

      <Section
        tittle="Dodaj nowe zadanie"
        body={< Form addNewTask={addNewTask} />}
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
};

export default App;
