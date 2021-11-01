import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { getTaskById } from "../tasksSlice";
import { Wrapper } from "./styled";

export function TaskPage() {
    const { id } = useParams();
    const task = useSelector(state => getTaskById(state, id));
 
  return (
    <Container>
      <Header
        tittle="Szczegóły zadania"
      />
      <Section
        tittle={task ? task.content : "Nie znaleziono zadania"}
        body={!!task && (
            <Wrapper>
              <strong>Ukończono:</strong> {task.done ? "Tak" : "Nie"}
            </Wrapper>
        )}
        />
    </Container>
  );
};