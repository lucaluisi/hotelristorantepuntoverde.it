"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { playfair } from "../../fonts";
import { sendForm, State } from "@/lib/actions";
import { useActionState } from "react";
import { H4 } from "@/components/ui/text";

export default function Form() {
  const initialState: State = { message: null, errors: {} };
  const [state, formAction] = useActionState(sendForm, initialState);

  return (
    <form
      action={formAction}
      className="flex flex-col items-center justify-center h-dvh gap-10"
      aria-describedby="message"
    >
      <div>
        <H4 className="text-7xl">Contattaci</H4>
      </div>
      <div className="min-w-[50vw] flex flex-col gap-10">
        <div>
          <Label htmlFor="name">Nome</Label>
          <Input
            type="text"
            id="name"
            name="name"
            aria-describedby="name-error"
          />
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
          <Label htmlFor="email">Email</Label>
          <Input
            type="text"
            id="email"
            name="email"
            aria-describedby="email-error"
          />
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
          <Label htmlFor="message">Messaggio</Label>
          <Textarea
            id="message"
            name="message"
            aria-describedby="message-error"
          />
          <div id="message-error" aria-live="polite" aria-atomic="true">
            {state.errors?.message &&
              state.errors.message.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>
        <Button className="w-full">Invia</Button>
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
