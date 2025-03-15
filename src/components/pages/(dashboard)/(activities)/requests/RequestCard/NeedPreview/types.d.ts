import { RequestType } from "@/enums/requests";

export interface NeedPreviewProps {
  type: keyof typeof RequestType;
}
