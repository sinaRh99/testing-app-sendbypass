import { z } from "zod";

export const profileSchema = z
  .object({
    first_name: z.string().optional(),
    last_name: z.string().optional(),
    email: z.string(),
    bio: z.string().max(200, "Bio must be at most 200 characters").nullable(),
    speak_languages: z.array(z.string()).optional(),
    image: z
      .union([z.string(), z.instanceof(File)])
      .optional()
      .nullable(),
    background: z
      .union([z.string(), z.instanceof(File)])
      .optional()
      .nullable(),
    type: z.enum(["PERSONAL", "BUSINESS"]).optional(),
    business_name: z.string().optional(),
    website: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.type === "PERSONAL") {
      if (!data.first_name) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "First name is required",
          path: ["first_name"],
        });
      }
      if (!data.last_name) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Last name is required",
          path: ["last_name"],
        });
      }
    }

    if (data.type === "BUSINESS") {
      if (!data.business_name) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Business name is required for business profiles",
          path: ["business_name"],
        });
      }

      if (!data.website) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Website is required for business profiles",
          path: ["website"],
        });
      } else {
        try {
          new URL(data.website);
        } catch {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message:
              "Please enter a valid URL (example: https://www.example.com)",
            path: ["website"],
          });
        }
      }
    }
  });

export const contactSchema = z.object({
  mobiles: z.array(
    z.object({
      id: z.string(),
      phone: z
        .string()
        .min(10, "Phone number must be at least 10 digits")
        .max(20, "Phone number must be at most 20 digits"),
      countryTag: z.string().optional(),
      zone_code: z.string().nonempty("Zone code is required"),
    }),
  ),
  socials: z.array(
    z.object({
      id: z.string(),
      type: z.string().min(1, "Required"),
      link: z.string().min(3, "Invalid link"),
    }),
  ),
});

export const addressSchema = z.object({
  addresses: z.array(
    z.object({
      id: z.string(),
      country: z.string().min(1, "Country is required"),
      city: z.string().min(1, "City is required"),
      description: z.string().nonempty("Is required"),
    }),
  ),
});

export type ProfileFormValues = z.infer<typeof profileSchema>;
export type ContactFormValues = z.infer<typeof contactSchema>;
export type AddressFormValues = z.infer<typeof addressSchema>;
