import { z } from "zod";

import { sharedNeedFormSchema } from "../shared";

export const createShippingNeedFormSchema = sharedNeedFormSchema;

export type CreateShippingNeedFormData = z.infer<
  typeof createShippingNeedFormSchema
>;
