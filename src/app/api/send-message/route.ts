import { sendEmail } from "@/services/send-email";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

type SendEmailDTO = {
  name: string;
  email: string;
  message: string;
};

export async function POST(request: Request) {
  try {
    const body: SendEmailDTO = await request.json();
    console.log({ body });

    const { name, email, message } = body;

    const text = `
        <p>New message received througt the site</p>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Message:</p><br />
        <p>${message}</p>
    `;
    await sendEmail("Site Tiago Rocha - New message", text);
    return new NextResponse(JSON.stringify({ message: "Mensagem enviada" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({
        message: "Não foi possível enviar a mensagem no momento",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
