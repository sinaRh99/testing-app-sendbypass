export interface useSnackbarProps {
  msg: string;
  options: Partial<{
    icon: string;
    actionText: string;
    onActionClick: () => void;
    autoHideDuration: number; // ✅ Add this line
  }>;
}
