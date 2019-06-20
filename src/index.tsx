import React, { useState, createContext, useContext, useEffect } from "react";

const RouteContext = createContext({ currentUrl: "/", setCurrentUrl: null });

const stylesheet = {
  bordered: {
    border: {
      type: "line"
    },
    style: {
      border: {
        fg: "blue"
      }
    }
  },
  magentaBackground: {
    style: {
      bg: "magenta"
    }
  }
};
export const Route = ({ children, path, ...props }) => {
  const { currentUrl } = useContext(RouteContext);
  //console.log("Current url is ", currentUrl);
  if (currentUrl == path)
    return <blessed-box {...props}>{children}</blessed-box>;
  return null;
};

export const Link = ({ to, children }) => {
  const { currentUrl, setCurrentUrl } = useContext(RouteContext);
  function switchRoute() {
    if (to == currentUrl) return null;
    //console.log("Setting current url to ", to);
    setCurrentUrl(to);
  }
  return (
    <blessed-button
      class={stylesheet.bordered}
      shrink={true}
      mouse={true}
      onPress={switchRoute}
      onClick={switchRoute}
      clickable={true}
    >
      {children}
    </blessed-button>
  );
};

const SimpleBlessedRouter = ({ defaultUrl, children }) => {
  const [currentUrl, setCurrentUrl] = useState(defaultUrl || "/");
  return (
    <RouteContext.Provider value={{ currentUrl, setCurrentUrl }}>
      {children}
    </RouteContext.Provider>
  );
};

export default SimpleBlessedRouter;
