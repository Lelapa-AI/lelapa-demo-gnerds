import { useEffect, useState } from "react";
import { useLocation } from "@tanstack/react-router";

import { FULLSCREEN_ROUTES } from "../constants";

export const useScreen = (fullScreen = false) => {
  const location = useLocation();
  const [isFullScreen, setFullScreen] = useState(fullScreen);

  const toggleFullScreen = () => setFullScreen(!isFullScreen);

  useEffect(() => {
    const currentRoute = location.pathname;
    const isFullScreenRoute = FULLSCREEN_ROUTES.includes(currentRoute);

    if (isFullScreenRoute) {
      setFullScreen(true);
    }
  }, [location.pathname]);

  return { isFullScreen, toggleFullScreen };
};
