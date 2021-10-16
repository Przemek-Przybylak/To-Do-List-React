import { BrowserRouter, Link, Switch, Route, BroserRouter } from "react-router-dom";
import { Tasks } from "./features/tasks/Tasks";
import { Author } from "./features/author/Author";

export const App = () =>
    <BrowserRouter>
        <nav>
            <ul>
                <li>
                    <Link to="/zadania">Zadania</Link>
                    <Link to="/author">O autorze</Link>
                </li>
            </ul>
            <Switch>
                <Route path="/zadania">
                    <Tasks />
                </Route>
                <Route path="/author">
                    <Author />
                </Route>
            </Switch>
        </nav>
    </BrowserRouter>
    ;

