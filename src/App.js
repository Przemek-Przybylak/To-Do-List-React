import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

const tasks = [
  { id: 1, content: "obejrzeć mecz", done: false },
  { id: 2, content: "zjeść obiad", done: true },
];

const hideDone = true;

function App() {
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
        body={<Tasks tasks={tasks} hideDone={hideDone} />}
        extraHeaderContent={<Buttons tasks={tasks} hideDone={hideDone} />}
      />

    </Container>

  );
}

export default App;
