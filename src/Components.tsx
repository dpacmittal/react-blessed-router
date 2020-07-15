import React, { useState, createContext, useContext } from "react";
import { RouteContext } from "./RouteContext";
import useRouter from "./useRouter";
export const Route = ({ children, path }: { children: any; path: string }) => {
  const { route } = useRouter();
  if (route == path) return <>{children}</>;
  return null;
};

export const Link = ({
  to,
  children,
  ...props
}: {
  to: string;
  children: any;
}) => {
  const { route, goto } = useRouter();
  function switchRoute() {
    if (to == route) return;
    if (to && goto) goto(to);
  }
  return (
    // @ts-ignore
    <blessed-button
      shrink={true}
      mouse={true}
      onPress={switchRoute}
      onClick={switchRoute}
      width="100%"
      style={{
        border: {
          fg: "blue",
        },
      }}
      clickable={true}
      border={{ type: "line" }}
      {...props}>
      {children}
      {/* 
      // @ts-ignore */}
    </blessed-button>
  );
};
