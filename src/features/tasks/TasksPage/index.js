import Form from "./Form";
import TasksList from "./TasksList";
import Buttons from "../../../Buttons";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import { Button } from "../../../Button";
import Search from "./Search";

export function TasksPage() {

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
        extraHeaderContent={
          <Button />
        }
      />
      <Section
        tittle="Wyszukiwarka"
        body={
          <Search />
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


