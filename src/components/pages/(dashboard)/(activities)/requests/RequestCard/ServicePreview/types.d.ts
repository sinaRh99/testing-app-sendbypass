import { RequestType } from "@/enums/requests";

export interface ServicePreviewProps {
  type: keyof typeof RequestType;
}
