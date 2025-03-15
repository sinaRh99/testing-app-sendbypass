import Divider from "@mui/material/Divider";

import { cn } from "@/utils";

import { DimensionItem } from "./DimensionItem";
import { PreviewDimensionProps } from "./types";

export default function PreviewDimension({
  weight,
  length,
  width,
  height,
}: PreviewDimensionProps) {
  return (
    <div className="flex gap-6 justify-between w-full h-full">
      <div className="hidden justify-center p-8 h-full border border-surface-container-high md:flex rounded-small">
        <DimensionItem
          icon="kettlebell"
          label="Weight"
          unit="g"
          amount={weight}
        />
      </div>
      <div className="flex gap-6 justify-between p-8 h-full border border-surface-container-high rounded-small">
        <DimensionItem
          className="md:hidden"
          icon="kettlebell"
          label="Weight"
          unit="g"
          amount={weight}
        />
        {Number(length) > 0 && (
          <div className="py-8 md:hidden">
            <Divider
              orientation="vertical"
              className="bg-surface-container-high"
            />
          </div>
        )}

        <DimensionItem
          icon="arrows-diagonal-expand"
          label="Length"
          unit="cm"
          amount={length}
          className={cn({ "w-[70px]": Number(length) === 0 })}
        />
        {Number(width) > 0 && (
          <div className="py-8">
            <Divider
              orientation="vertical"
              className="bg-surface-container-high"
            />
          </div>
        )}

        <DimensionItem
          icon="arrows-horizontal-expand"
          label="Width"
          unit="cm"
          amount={width}
          className={cn({ "w-[70px]": Number(width) === 0 })}
        />
        {Number(width) > 0 && (
          <>
            <div className="py-8">
              <Divider
                orientation="vertical"
                className="bg-surface-container-high"
              />
            </div>
          </>
        )}

        <DimensionItem
          icon="arrows-vertical-expand"
          label="Height"
          unit="cm"
          amount={height}
          className={cn({ "w-[70px]": Number(height) === 0 })}
        />
      </div>
    </div>
  );
}
