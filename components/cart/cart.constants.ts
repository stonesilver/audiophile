import { z } from "zod";

// const required = "This is a required field";
export const cartSchema = z
  .object({
    first_name: z.string().trim().min(2, "Minimum of 2 characters"),
    last_name: z.string().trim().min(2, "Minimum of 2 characters"),
    email: z
      .string()
      .trim()
      .email()
      .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Invalid email format"),
    phone_number: z
      .string()
      .trim()
      .regex(/^0(70|80|81|90|91)\d{8}$/, "Invalid phone number format"),
    address: z.string().trim().min(5, { message: "Minimum of 5 characters" }),
    zip_code: z.string().trim().min(1, "This field is required").max(5, { message: "Enter a zip code" }),
    city: z.string().trim().min(1, "This field is required"),
    country: z.string().trim().min(1, "This field is required"),
    payment_method: z.string().trim().min(1, "This field is required"),
    e_money_number: z.string().trim().min(1, "This field is required"),
    e_money_pin: z.string().trim().min(4, { message: "Enter a valid pin" }).max(4, { message: "Enter a valid pin" }),
  })
  .required();

export type CartFormData = z.output<typeof cartSchema>;

export const cartDefaults = {
  first_name: "",
  last_name: "",
  email: "",
  phone_number: "",
  address: "",
  zip_code: "",
  city: "",
  country: "",
  payment_method: "e-Money",
  e_money_number: "",
  e_money_pin: "",
};

export const checkoutFormFields = [
  {
    title: "BILLING DETAILS",
    formFields: [
      { label: "First name", name: "first_name" as const, type: "text", placeholder: "John" },
      { label: "Last name", name: "last_name" as const, type: "text", placeholder: "Doe" },
      { label: "E-mail address", name: "email" as const, type: "email", placeholder: "@mail.com" },
      { label: "Phone Number", name: "phone_number" as const, type: "tel", placeholder: "+2347064378577" },
    ],
  },
  {
    title: "SHIPPING INFO",
    formFields: [
      {
        label: "Address",
        name: "address" as const,
        type: "text",
        placeholder: "1137 Williams Avenue",
        className: "col-span-2-md",
      },
      { label: "ZIP Code", name: "zip_code" as const, type: "text", placeholder: "10001", maxLength: 5 },
      { label: "City", name: "city" as const, type: "text", placeholder: "Lagos" },
      { label: "Country", name: "country" as const, type: "text", placeholder: "Nigeria" },
    ],
  },
  {
    title: "PAYMENT DETAILS",
    formFields: [
      {
        label: "Payment Method",
        name: "payment_method" as const,
        type: "radio",
        placeholder: "",
        options: [
          { label: "e-Money", value: "e-Money" },
          { label: "Cash on Delivery", value: "Cash on Delivery" },
        ],
      },
      { label: "e-Money Number", name: "e_money_number" as const, type: "text", placeholder: "238521993" },
      {
        label: "e-Money PIN",
        name: "e_money_pin" as const,
        type: "text",
        placeholder: "﹡﹡﹡﹡",
        maxLength: 4,
        inputMode: "numeric" as const,
      },
    ],
  },
];
