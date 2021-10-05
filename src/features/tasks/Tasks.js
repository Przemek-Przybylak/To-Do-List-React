import Form from "./Form";
import TasksList from "./TasksList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import Container from "../../common/Container";

export function Tasks() {

  return (
    <Container>
      <Header
        tittle="Lista zadań"
      />
      <Section
        tittle="Dodaj nowe zadanie"
        body={
          < Form />
        }
      />
      <Section
        tittle="Lista zadań"
        body={
          <TasksList />
        }
        extraHeaderContent={ 
          <Buttons />
        }
      />
    </Container>
  );
};

export default Tasks;
