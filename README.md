# React Blessed Router

This is a very simple routing package for react-blessed.

## Usage

```
import React from "react";
import blessed from "neo-blessed";
import { createBlessedRenderer } from "react-blessed";
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
const screen = blessed.screen({
  autoPadding: true,
  smartCSR: true,
  title: "react-blessed hello world"
});

const render = createBlessedRenderer(blessed);

// Adding a way to quit the program
screen.key(["escape", "q", "C-c"], function(ch, key) {
  return process.exit(0);
});

// Rendering the React app using our screen
render(<App />, screen);
```
