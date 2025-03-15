export interface SnackbarContentProps {
  message: string;
  actionText?: string;
  onActionClick?: () => void;
  longAction?: boolean;
  onClose?: () => void;
  icon?: string;
}
