"use server";

import { CartFormData, cartSchema } from "./cart.constants";

export const submitCheckoutForm = async (_: unknown, formData: FormData) => {
  await new Promise((resolve) => {
    return setTimeout(() => {
      resolve("done");
    }, 2000);
  });

  const toObject = Object.fromEntries(formData) as CartFormData;

  // console.log({ toObject });

  const result = cartSchema.safeParse(toObject);

  // console.log({ result });
  if (result.success) {
    const response = { message: "Form submitted", success: true, errors: null, input: toObject };
    console.log({ response }, "success response");
    return response;
  }
  // console.log({ _, formData, test: "okay" });

  const response = {
    message: "Validation error",
    success: false,
    errors: result.error?.issues.reduce((acc, issue) => {
      acc[issue.path[0] as keyof typeof acc] = issue.message;
      return acc;
    }, {} as CartFormData),
    input: toObject,
  };

  console.log({ response }, "error response");

  return response;
};
