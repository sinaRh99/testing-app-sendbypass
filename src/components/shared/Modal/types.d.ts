import { ReactNode } from "react";

type contentProps = {
  className?: string;
};
export interface ModalProps {
  open: boolean;
  children: ReactNode;
  contentProps?: contentProps;
  initialHeight?: number | string;
  onClose: () => void;
}
