# React Blessed Router

This is a very simple routing package for react-blessed.

## Usage

```
import ReactBlessedRouter, {Route, Link} from "react-blessed-router";

const App = ()=>(
    <ReactBlessedRouter>
        <Route path="/screen2">
            <Screen2 />
        </Route>
        <Route Path="/screen1">
            <Screen1 />
        </Route>
        <Link to="/screen1">Go to Screen 1</Link>
        <Link to="/screen2">Go to Screen 2</Link>
    </ReactBlessedRouter>
)
```
