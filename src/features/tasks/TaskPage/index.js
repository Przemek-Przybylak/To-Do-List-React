import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { getTaskById } from "../tasksSlice";

export function TaskPage() {
    const { id } = useParams();
    const task = useSelector(state => getTaskById(state, id));
 
  return (
    <Container>
      <Header
        tittle="Szczegóły zadania"
      />
      <Section
        tittle={task.content}
        body={
            <><strong>Ukończono:</strong> {task.done ? "Tak" : "Nie"}</>
        }
        />
    </Container>
  );
};