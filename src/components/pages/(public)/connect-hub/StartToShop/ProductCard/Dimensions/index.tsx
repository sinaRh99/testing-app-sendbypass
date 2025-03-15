import { FC } from "react";

import Divider from "@mui/material/Divider";

import { Dimension } from "./Dimension";
import { DimensionsProps } from "./types";

export const Dimensions: FC<DimensionsProps> = ({ length, width, height }) => {
  return (
    <div className="h-[90px] border border-surface-container-high rounded-small flex items-center gap-6">
      <Dimension type="length" icon="arrows diagonal expand" value={length} />
      <Divider flexItem orientation="vertical" className="!my-8" />
      <Dimension type="width" icon="arrows horizontal expand" value={width} />
      <Divider flexItem />
      <Divider flexItem orientation="vertical" className="!my-8" />
      <Dimension type="height" icon="arrows vertical expand" value={height} />
    </div>
  );
};
