"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { sendForm, State } from "@/lib/actions";
import { H2 } from "@/components/ui/text";
import { motion } from "framer-motion";
import { useActionState } from "react";

export default function Form() {
  const initialState: State = { message: null, errors: {} };
  const [state, formAction] = useActionState(sendForm, initialState);

  return (
    <form
      action={formAction}
      className="flex flex-col items-center justify-center min-h-screen gap-10 p-12"
      aria-describedby="message"
    >
      <div>
        <H2 className="text-7xl">Contattaci</H2>
      </div>
      <div className="min-w-[50vw] flex flex-col gap-10">
        <div>
          <motion.div
            initial={{ opacity: 0, y: "20%" }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.3,
              delay: 0.2,
            }}
          >
            <Label htmlFor="name">Nome</Label>
            <Input
              type="text"
              id="name"
              name="name"
              aria-describedby="name-error"
            />
          </motion.div>
          <div id="name-error" aria-live="polite" aria-atomic="true">
            {state.errors?.name &&
              state.errors.name.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>
        <div>
          <motion.div
            initial={{ opacity: 0, y: "20%" }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.3,
              delay: 0.4,
            }}
          >
            <Label htmlFor="email">Email</Label>
            <Input
              type="text"
              id="email"
              name="email"
              aria-describedby="email-error"
            />
          </motion.div>
          <div id="email-error" aria-live="polite" aria-atomic="true">
            {state.errors?.email &&
              state.errors.email.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>
        <div>
          <motion.div
            initial={{ opacity: 0, y: "20%" }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.3,
              delay: 0.6,
            }}
          >
            <Label htmlFor="message">Messaggio</Label>
            <Textarea
              id="message"
              name="message"
              aria-describedby="message-error"
            />
          </motion.div>
          <div id="message-error" aria-live="polite" aria-atomic="true">
            {state.errors?.message &&
              state.errors.message.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: "20%" }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.3,
            delay: 0.8,
          }}
          className="z-20 mix-blend-difference"
        >
          <Button className="w-full">Invia</Button>
        </motion.div>
      </div>
      <div
        id="message"
        className="text-center"
        aria-live="polite"
        aria-atomic="true"
      >
        {state.message && (
          <p
            className={`mt-2 text-sm ${
              state.success ? "text-green-500" : "text-red-500"
            }`}
            key={state.message}
          >
            {state.message}
          </p>
        )}
      </div>
    </form>
  );
}
