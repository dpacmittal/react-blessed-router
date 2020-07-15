import React from "react";
// @ts-ignore
import blessed from "neo-blessed";
import { createBlessedRenderer } from "react-blessed";
// @ts-ignore
import ReactBlessedRouter, { Route, Link, useRouter } from "../lib";

const UseRouterExample = (props: any) => {
  const { route } = useRouter();
  return <blessed-box {...props}>{`Current route is ${route}`}</blessed-box>;
};

const CustomLinkExample = (props: any) => {
  const { goto } = useRouter();
  return (
    <blessed-button
      style={{
        border: {
          fg: "red",
        },
      }}
      border={{ type: "line" }}
      shrink={true}
      width="20%"
      onPress={() => goto(props.to)}
      onClick={() => goto(props.to)}
      clickable={true}
      mouse={true}
      {...props}>
      {props.children}
    </blessed-button>
  );
};

const App = () => (
  <ReactBlessedRouter defaultUrl="/">
    <blessed-layout layout="inline" width="100%" height="100%" top="0" left="0">
      <blessed-box
        left="0"
        top="0"
        width="25%"
        border={{ type: "line" }}
        height="100%">
        <UseRouterExample top="0" left="0" width="95%" height="100" />
        <Link to="/" top="100" left="0" width="95%">
          Home
        </Link>
        <Link to="/screen1" top="200" left="0" width="95%">
          Screen 1 Contents
        </Link>
        <CustomLinkExample to="/screen2" top="300" left="0" width="95%">
          Screen 2 Contents
        </CustomLinkExample>
      </blessed-box>
      <blessed-box
        width="75%"
        height="100%"
        border={{ type: "line" }}
        style={{ border: { fg: "blue" } }}>
        <Route path="/">
          <blessed-box>This is the default route.</blessed-box>
        </Route>
        <Route path="/screen1">
          <UseRouterExample top="0" left="0" />
          <blessed-box>hello world</blessed-box>
        </Route>
        <Route path="/screen2">
          <blessed-box>Hello</blessed-box>
        </Route>
      </blessed-box>
    </blessed-layout>
  </ReactBlessedRouter>
);
const screen = blessed.screen({
  autoPadding: true,
  smartCSR: true,
  title: "react-blessed-router example",
  useBCE: true,
  dockBorders: true,
  cursor: {
    artificial: true,
    blink: true,
    shape: "underline",
  },
});

const render = createBlessedRenderer(blessed);

// Adding a way to quit the program
screen.key(["escape", "q", "C-c"], function (ch: any, key: any) {
  return process.exit(0);
});

// Rendering the React app using our screen
render(<App />, screen);
