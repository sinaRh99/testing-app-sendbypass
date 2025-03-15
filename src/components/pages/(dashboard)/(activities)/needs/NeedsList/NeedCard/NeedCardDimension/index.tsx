import Divider from "@mui/material/Divider";

import { cn } from "@/utils";

import { DimensionItem } from "../../../NeedsForm/NeedsFormPreview/PreviewDimension/DimensionItem";

import { NeedCardDimensionProps } from "./types";

export const NeedCardDimension = ({
  properties,
  className,
}: NeedCardDimensionProps) => {
  const hasDimension =
    Number(properties.length) > 0 &&
    Number(properties.width) > 0 &&
    Number(properties.height) > 0;
  return (
    <div className={cn("flex flex-wrap gap-8 md:flex-nowrap", className)}>
      <div className="flex justify-center p-8 border border-surface-container-high rounded-small grow">
        <DimensionItem
          icon="kettlebell"
          label="Weight"
          unit="g"
          amount={String(properties.weight)}
        />
      </div>
      {hasDimension && (
        <div className="flex gap-6 justify-between p-8 border border-surface-container-high rounded-small grow">
          <DimensionItem
            icon="arrows-diagonal-expand"
            label="Length"
            unit="cm"
            amount={String(properties.length)}
          />
          <div className="py-8">
            <Divider
              orientation="vertical"
              className="bg-surface-container-high"
            />
          </div>
          <DimensionItem
            icon="arrows-horizontal-expand"
            label="Width"
            unit="cm"
            amount={String(properties.width)}
          />
          <div className="py-8">
            <Divider
              orientation="vertical"
              className="bg-surface-container-high"
            />
          </div>
          <DimensionItem
            icon="arrows-vertical-expand"
            label="Height"
            unit="cm"
            amount={String(properties.height)}
          />
        </div>
      )}
    </div>
  );
};
