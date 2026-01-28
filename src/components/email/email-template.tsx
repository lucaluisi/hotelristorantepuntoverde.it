import * as React from "react";
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
  Img,
  Link,
} from "@react-email/components";

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

///////////////////////
// I MURT DI OUTLOOK //
///////////////////////
// Uso le tabelle per il layout perché Outlook non supporta bene CSS :(
///////////////////////

export const EmailTemplate: React.FC<EmailTemplateProps> = ({
  name,
  email,
  message,
}) => {
  const logoUrl = `https://hotelristorantepuntoverde.it/logo/logo.png`;

  return (
    <Html>
      <Head />
      <Preview>Nuovo messaggio da {name}</Preview>
      <Body style={{ backgroundColor: "#f9f9f9", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", margin: "0", padding: "0" }}>
        <Container style={{ margin: "0 auto", padding: "20px", width: "580px", backgroundColor: "#ffffff" }}>

          {/* Logo */}
          <Section style={{ textAlign: "center" as const, marginBottom: "20px" }}>
            <Img
              src={logoUrl}
              width={"150"}
              alt="logo"
              style={{ margin: "0 auto", display: "block" }}
            />
          </Section>

          <Heading style={{ color: "#000000", fontSize: "20px", fontWeight: "400", textAlign: "center", padding: "0", margin: "30px 0 30px 0" }}>
            Hai ricevuto un <strong>nuovo messaggio</strong>
          </Heading>

          {/* Box Informazioni */}
          <Section style={{ backgroundColor: "#f4f4f4", borderRadius: "4px", overflow: "hidden" }}>
            <table width="100%" border={0} cellPadding="20" cellSpacing="0">
              <tr>
                <td>
                  <Text style={{ margin: "0 0 10px 0", fontSize: "14px", color: "#666" }}>
                    <strong>DETTAGLI CONTATTO</strong>
                  </Text>
                  <Text style={{ margin: "0 0 5px 0", fontSize: "16px", color: "#333" }}>
                    👤 <strong>Nome:</strong> {name}
                  </Text>
                  <Text style={{ margin: "0", fontSize: "16px", color: "#333" }}>
                    📧 <strong>Email:</strong> <Link href={`mailto:${email}`} style={{ color: "#2d5a27", textDecoration: "none" }}>{email}</Link>
                  </Text>
                </td>
              </tr>
            </table>
          </Section>

          {/* Sezione messaggio */}
          <Section style={{ marginTop: "30px" }}>
            <Text style={{ fontSize: "12px", fontWeight: "bold", color: "#999", textTransform: "uppercase", marginBottom: "10px" }}>
              Messaggio:
            </Text>
            <table width="100%" border={0} cellPadding="0" cellSpacing="0">
              <tr>
                <td width="4" style={{ backgroundColor: "#2d5a27" }}>&nbsp;</td> {/* Riga laterale verde */}
                <td style={{ paddingLeft: "20px" }}>
                  <Text style={{ fontSize: "16px", color: "#444", fontStyle: "italic", lineHeight: "1.6", margin: "0" }}>
                    {message.split('\n').map((line, index) => (
                      <span key={index}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </Text>
                </td>
              </tr>
            </table>
          </Section>

          <Hr style={{ border: "1px solid #eaeaea", margin: "26px 0", width: "100%" }} />

          <Text style={{ color: "#666666", fontSize: "12px", lineHeight: "24px", textAlign: "center" }}>
            Questa email è stata generata automaticamente dal modulo contatti di
            <strong> hotelristorantepuntoverde.it</strong>.
            Puoi rispondere direttamente a questa email per contattare il cliente.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}
