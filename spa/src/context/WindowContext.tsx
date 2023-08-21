import { useEffect, useState, createContext, ReactNode } from "react";
import throttle from "../utils/throttle";

type Props = {
  children?: ReactNode;
};

const WindowContext = createContext<number>(0);

function WindowContextProvider({ children }: Props) {
  function getClientWidth() {
    return document.documentElement.clientWidth;
  }

  const [clientWidth, setClientWidth] = useState<number>(getClientWidth());

  useEffect(() => {
    function resizeHandler() {
      setClientWidth(getClientWidth());
    }

    const throttledResizeHandler = throttle(resizeHandler, 200);

    window.addEventListener("resize", throttledResizeHandler);
    return () => {
      window.removeEventListener("resize", throttledResizeHandler);
    };
  }, []);

  return (
    <WindowContext.Provider value={clientWidth}>
      {children}
    </WindowContext.Provider>
  );
}

export { WindowContext };
export default WindowContextProvider;
