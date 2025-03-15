import { RequestType } from "@/enums/requests";

export interface RequestPreviewProps {
  type: keyof typeof RequestType;
}
