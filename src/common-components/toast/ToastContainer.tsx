import { ToastType } from "../../types";
import { ToastError } from "./ToastError";
import { ToastSuccess } from "./ToastSuccess";

interface Props {
  message: string;
  type: ToastType;
  onClose: () => void;
}

export const ToastContainer = ({ message, type, onClose }: Props) => {
  const renderToast = (message: string, type: ToastType) => {
    switch (type) {
      case "success":
        return <ToastSuccess message={message} onClose={onClose} />;

      case "error":
        return <ToastError message={message} onClose={onClose} />;

      default:
        return null;
    }
  };

  return (
    <div className="fixed bottom-5 left-5 w-full">
      {renderToast(message, type)}
    </div>
  );
};
