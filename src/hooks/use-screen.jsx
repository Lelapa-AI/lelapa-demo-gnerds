import { useEffect, useState } from "react";
import { useLocation } from "@tanstack/react-router";

import { FULLSCREEN_ROUTES } from "../constants";

export const useScreen = () => {
  const [isFullScreen, setFullScreen] = useState();
  const [showBottomNav, setShowBottomNav] = useState(true);
  const location = useLocation();

  const toggleFullScreen = () => setFullScreen(!isFullScreen);

  useEffect(() => {
    const currentRoute = location?.pathname;
    const isFullScreenRoute = FULLSCREEN_ROUTES.includes(currentRoute);
    if (isFullScreenRoute) {
      setFullScreen(true);
      setShowBottomNav(false);
    } else {
      setFullScreen(false);
      setShowBottomNav(true);
    }
  }, [location?.pathname]);

  return { isFullScreen, toggleFullScreen, showBottomNav };
};
