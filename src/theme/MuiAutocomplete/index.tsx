import { Icon } from "@/components/shared/Icon";
export const MuiAutocomplete: any = {
  defaultProps: {
    popupIcon: <Icon name="Caret Down MD" />,
    renderOption: (props: any, option: any, { selected }: any) => {
      const { key, ...optionProps } = props;
      return (
        <li
          key={key}
          {...optionProps}
          style={{
            backgroundColor: selected
              ? "rgba(var(--primary-opacity-8))"
              : "transparent",
          }}
          className="!text-body-medium !text-on-surface p-8 cursor-pointer rounded-small hover:!bg-primary-opacity-8 transition-all duration-200"
        >
          {option.label}
        </li>
      );
    },
  },
  styleOverrides: {
    clearIndicator: {
      color: "rgb(var(--primary))",
      backgroundColor: "transparent",
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
    popupIndicator: {
      color: "rgb(var(--primary))",
      backgroundColor: "transparent",
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
    paper: {
      borderRadius: "12px",
      backgroundColor: "rgb(var(--surface-container-lowest))",
      padding: "8px 20px 8px 8px",
      boxShadow: "0px 4px 20px 3px rgba(0, 0, 0, 0.10)",
    },
    listbox: {
      overflowY: "auto",
      marginRight: "-16px",
      "&::-webkit-scrollbar": {
        width: "6px",
      },
      "&::-webkit-scrollbar-track": {
        boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
        webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "rgba(0,0,0,.1)",
        borderRadius: "12px",
      },
    },
  },
};
