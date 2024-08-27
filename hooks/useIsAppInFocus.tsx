import { useState, useEffect } from "react";
import { AppState } from "react-native";
import { useIsFocused } from "@react-navigation/native";

const useIsAppInFocus = () => {
  const [isAppInFocus, setIsAppInFocus] = useState(true);
  const isScreenFocused = useIsFocused();

  useEffect(() => {
    const handleAppStateChange = (nextAppState: string) => {
      setIsAppInFocus(nextAppState === "active" && isScreenFocused);
    };

    const subscription = AppState.addEventListener(
      "change",
      handleAppStateChange
    );

    // Atualizar o estado quando o foco da tela mudar
    setIsAppInFocus(AppState.currentState === "active" && isScreenFocused);

    return () => {
      subscription.remove();
    };
  }, [isScreenFocused]);

  return isAppInFocus;
};

export default useIsAppInFocus;
