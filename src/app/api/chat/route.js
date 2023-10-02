import { Configuration, OpenAIApi } from "openai-edge";
import { OpenAIStream, StreamingTextResponse } from "ai";

// Le decimos a Vercel donde queremos ejecutar este endpoint
export const runtime = "edge";

// Crear el cliente de OpenAI
const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);

export async function POST(request) {
  // Obtener el texto que el usuario envió
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    stream: true,
    messages: [
      {
        role: "system",
        content: "Comportate como si fueras un humano",
      },
      {
        role: "user",
        content: "",
      },
    ],
  });

  // transformar la respuesta de OpenAI en un text-stream
  const stream = OpenAIStream(response);

  return new StreamingTextResponse(stream);
}
