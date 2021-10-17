import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { Tasks } from "./features/tasks/Tasks";
import { Author } from "./features/author/Author";
import { NavList } from "./features/NavList";


export const App = () =>
    <HashRouter>
        <nav>
            <NavList />
            <Switch>
                <Route path="/zadania">
                    <Tasks />
                </Route>
                <Route path="/author">
                    <Author />
                </Route>
                <Route path="/">
                    <Redirect to="/zadania" />
                </Route>
            </Switch>
        </nav>
    </HashRouter>
    ;

