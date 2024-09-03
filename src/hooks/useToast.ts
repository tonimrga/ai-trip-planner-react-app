import { useContext } from "react";

import { ToastContext } from "../context";

export const useToast = () => {
  const { toast } = useContext(ToastContext);
  return toast;
};
