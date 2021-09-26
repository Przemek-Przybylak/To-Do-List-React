import { useState } from "react";
import { useSelector } from "react-redux";
import Form from "./Form";
import TasksList from "./TasksList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import Container from "../../common/Container";
import { useTasks } from "../../useTasks";
import { selectTasks } from "./tasksSlice";

export function Tasks() {
  const { tasks } = useSelector(selectTasks);

  const {
    removeTask,
    toggleTaskDone,
    setAllDone,
    addNewTask,
  } = useTasks();


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
          <TasksList
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone}
          />}
        extraHeaderContent={
          <Buttons
            setAllDone={setAllDone} />}
      />
    </Container>
  );
};

export default Tasks;
