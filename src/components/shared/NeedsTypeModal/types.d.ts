import { Icon } from "@/components";
export interface NeedsTypeModalProps {
  open: boolean;
  onClose: () => void;
}
export interface NeedOptionProps {
  key?: Number;
  title: string;
  icon: string;
  description: string;
  href: string;
  onClose?: () => void;
}
