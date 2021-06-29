import "./App.css";

import {Layout} from "@abc/protonpack";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {Dashboard} from "./dashboard";
import {Demo} from "./demo";

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route path="" component={Dashboard}/>
            <Route path="/demo" component={Demo}/>
        </Switch>
    </BrowserRouter>
);


export default App;
