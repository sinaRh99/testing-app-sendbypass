import { BaseComponentProps } from "../../types";

export interface IconProps extends BaseComponentProps {
  name: string;
  onClick?: () => void;
}
