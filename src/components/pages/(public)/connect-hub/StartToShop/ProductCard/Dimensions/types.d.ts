export interface DimensionProps {
  type: "length" | "width" | "height";
  value?: number;
  icon: string;
}

export interface DimensionsProps {
  length?: number;
  width?: number;
  height?: number;
}
