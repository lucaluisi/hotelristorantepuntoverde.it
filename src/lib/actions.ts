"use server";

import { z } from "zod";
import { Resend } from "resend";
import { EmailTemplate } from "@/components/email/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

const FormSchema = z.object({
  id: z.string(),
  name: z
    .string({
      invalid_type_error: "Please enter a name.",
    })
    .min(1, { message: "Please enter a name" }),
  email: z
    .string({
      invalid_type_error: "Please enter a valid email address.",
    })
    .email(),
  message: z
    .string({
      invalid_type_error: "Please enter a message",
    })
    .min(1, { message: "Please enter a message" }),
});

const SendForm = FormSchema.omit({ id: true });

export type State = {
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
  message?: string | null;
  success?: boolean;
};

export async function sendForm(prevState: State, formData: FormData) {
  const validatedFields = SendForm.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to send form.",
      success: false,
    };
  }

  const { name, email, message } = validatedFields.data;

  const { data, error } = await resend.emails.send({
    from: "Contact Form <no-reply@hotelristorantepuntoverde.it>",
    to: ["info@hotelristorantepuntoverde.it"],
    subject: "Nuovo messaggio dal form di contatto",
    react: EmailTemplate({ name, email, message }),
  });

  if (error) {
    return {
      errors: {},
      message: "Error: Failed to send form.",
      success: false,
    };
  } else {
    return {
      errors: {},
      message: "Grazie. Ci metteremo in contatto con te al più presto.",
      success: true,
    };
  }
}
