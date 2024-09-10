import { useEffect, useState } from "react";
import { useLocation } from "@tanstack/react-router";

import { FULLSCREEN_ROUTES } from "../constants";

export const useScreen = () => {
  const [isFullScreen, setFullScreen] = useState(false);
  const [isWeb, setIsWeb] = useState(true);
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

    if (window.innerWidth > 768) {
      setIsWeb(true);
    } else {
      setIsWeb(false);
    }
  }, [location?.pathname]);

  return { isFullScreen, isWeb, toggleFullScreen, showBottomNav };
};
