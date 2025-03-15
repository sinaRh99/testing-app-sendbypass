import { FC } from "react";

import { ServicePreview } from "../ServicePreview";

import { RequestPreviewProps } from "./types";

export const RequestPreview: FC<RequestPreviewProps> = ({ type }) => {
  return (
    <div>
      <ServicePreview type={type} />
    </div>
  );
};
