"use client";

import { useCallback, useState } from "react";

import Slide from "@mui/material/Slide";
import Snackbar from "@mui/material/Snackbar";

import { SnackbarContent } from "./SnackbarContent";
import { useSnackbarProps } from "./types";

export const useSnackbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [icon, setIcon] = useState<string | undefined>();
  const [actionText, setActionText] = useState<string | undefined>();
  const [onActionClick, setOnActionClick] = useState(() => () => {});
  const [autoHideDuration, setAutoHideDuration] = useState<number>(3000);
  const [snackbarKey, setSnackbarKey] = useState(0);

  const showSnackbar = useCallback(({ msg, options }: useSnackbarProps) => {
    setIsOpen(false);

    setTimeout(() => {
      setMessage(msg);
      setIcon(options.icon);
      setActionText(options.actionText);
      setOnActionClick(() => options.onActionClick || (() => {}));
      setAutoHideDuration(options.autoHideDuration || 3000);
      setSnackbarKey((prevKey) => prevKey + 1);
      setIsOpen(true);
    }, 50);
  }, []);

  const hideSnackbar = useCallback(() => {
    setIsOpen(false);
  }, []);

  const SnackbarComponent = (
    <Snackbar
      key={snackbarKey}
      open={isOpen}
      autoHideDuration={autoHideDuration}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      onClose={hideSnackbar}
      TransitionComponent={(props) => <Slide {...props} direction="up" />}
    >
      <div>
        <SnackbarContent
          message={message}
          icon={icon}
          actionText={actionText}
          onActionClick={onActionClick}
          onClose={hideSnackbar}
        />
      </div>
    </Snackbar>
  );

  return { isOpen, showSnackbar, hideSnackbar, SnackbarComponent };
};
