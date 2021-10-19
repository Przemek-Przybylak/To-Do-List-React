import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { TasksPage } from "./features/tasks/TasksPage/index.js";
import { TaskPage } from "./features/tasks/TaskPage"
import { AuthorPage } from "./features/author/AuthorPage";
import { NavList } from "./features/NavList";


export const App = () =>
    <HashRouter>
        <nav>
            <NavList />
            <Switch>
                <Route path="/zadania/:id">
                    <TaskPage />
                </Route>
                <Route path="/zadania">
                    <TasksPage />
                </Route>
                <Route path="/author">
                    <AuthorPage />
                </Route>
                <Route path="/">
                    <Redirect to="/zadania" />
                </Route>
            </Switch>
        </nav>
    </HashRouter>
    ;

