import { FC } from "react";

import { Dimensions } from "./Dimensions";
import { ImagesSlider } from "./ImagesSlider";
import { FeaturesProps } from "./types";
import { Weight } from "./Weight";

export const Features: FC<FeaturesProps> = (features) => {
  const { weight, images } = features;

  return (
    <div className="flex gap-6 items-center">
      <Weight value={weight} />
      <Dimensions {...features} />
      {!!images?.length && <ImagesSlider images={images} />}
    </div>
  );
};
