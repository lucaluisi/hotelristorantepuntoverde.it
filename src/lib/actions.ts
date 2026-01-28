"use server";

import { z } from "zod";
import nodemailer from "nodemailer";
import { EmailTemplate } from "@/components/email/email-template";
import { createElement } from "react";
import { render } from "@react-email/render";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

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

  try {
    transporter.sendMail({
      from: `"Sito Web" <no-reply@hotelristorantepuntoverde.it>`,
      to: "info@hotelristorantepuntoverde.it",
      subject: "Nuovo messaggio dal form di contatto",
      html: await render(createElement(EmailTemplate, { name, email, message })),
      replyTo: email as string, // Permette di rispondere direttamente all'utente
    });
  } catch (error) {
    return {
      errors: {},
      message: "Error: Failed to send form.",
      success: false,
    };
  }

  return {
    errors: {},
    message: "Grazie. Ci metteremo in contatto con te al più presto.",
    success: true,
  };

}
