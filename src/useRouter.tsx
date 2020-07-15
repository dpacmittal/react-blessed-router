import React, { useContext } from "react";
import { RouteContext } from "./RouteContext";

function useRouter() {
  const Ctx = useContext(RouteContext);
  return {
    route: Ctx.currentUrl,
    goto: Ctx.setCurrentUrl,
  };
}

export default useRouter;
