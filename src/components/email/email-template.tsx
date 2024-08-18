import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  message,
}) => (
  <div>
    <p>Hai un nuovo messaggio dal form del sito:</p>
    <p>Nome: {name}</p>
    <p>Email: {email}</p>
    <p>Messaggio: {message}</p>
    <a href={`mailto:${email}`}>rispondi</a>
  </div>
);
