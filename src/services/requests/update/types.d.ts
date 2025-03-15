import { RequestBody } from "../create/types";

export interface RequestPatchBody extends Partial<RequestBody> {
  id: string | number;
}
