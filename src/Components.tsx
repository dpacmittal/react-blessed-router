import React, { useState, createContext, useContext } from "react";
import { RouteContext } from "./RouteContext";
import useRouter from "./useRouter";
const stylesheet = {
  bordered: {
    border: {
      type: "line",
    },
    style: {
      border: {
        fg: "blue",
      },
    },
  },
  magentaBackground: {
    style: {
      bg: "magenta",
    },
  },
};
export const Route = ({ children, path }: { children: any; path: string }) => {
  const { route } = useRouter();
  //console.log("Current url is ", currentUrl);
  if (route == path) return <>{children}</>;
  return null;
};

export const Link = ({ to, children }: { to: string; children: any }) => {
  const { route, goto } = useRouter();
  function switchRoute() {
    if (to == route) return;
    //console.log("Setting current url to ", to);
    if (to && goto) goto(to);
  }
  return (
    // @ts-ignore
    <blessed-button
      class={stylesheet.bordered}
      shrink={true}
      mouse={true}
      onPress={switchRoute}
      onClick={switchRoute}
      clickable={true}>
      {children}
      {/* 
      // @ts-ignore */}
    </blessed-button>
  );
};
