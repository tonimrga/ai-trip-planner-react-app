import {
  createContext,
  PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from "react";

import { ToastType } from "../types";
import { ToastContainer } from "../common-components";
import { TOAST_DURATION } from "../consts";

interface IToastContext {
  toast: (message: string, type: ToastType) => void;
}

const ToastContext = createContext<IToastContext>({ toast: () => {} });

const ToastContextProvider = ({ children }: PropsWithChildren) => {
  const [message, setMessage] = useState<string>();
  const [type, setType] = useState<ToastType>();

  const shouldShowToast = message !== undefined && type !== undefined;

  useEffect(() => {
    if (shouldShowToast) {
      const timeoutId = setTimeout(() => {
        hideToastMessage();
      }, TOAST_DURATION);

      return () => clearTimeout(timeoutId);
    }
  }, [shouldShowToast]);

  const toast = useCallback((message: string, type: ToastType) => {
    setMessage(message);
    setType(type);
  }, []);

  const hideToastMessage = () => {
    setMessage(undefined);
    setType(undefined);
  };

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      {shouldShowToast && (
        <ToastContainer
          message={message}
          type={type}
          onClose={hideToastMessage}
        />
      )}
    </ToastContext.Provider>
  );
};

export { ToastContext, ToastContextProvider };
