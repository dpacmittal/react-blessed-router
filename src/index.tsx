import React, { useState } from "react";
import { RouteContext } from "./RouteContext";
import useRouter from "./useRouter";
import { Link, Route } from "./Components";

const ReactBlessedRouter = ({
  defaultUrl,
  children,
}: {
  defaultUrl: string;
  children: any;
}) => {
  const [currentUrl, setCurrentUrl] = useState(defaultUrl || "/");
  return (
    <RouteContext.Provider value={{ currentUrl, setCurrentUrl }}>
      {children}
    </RouteContext.Provider>
  );
};

export default ReactBlessedRouter;
export { useRouter, Link, Route };
