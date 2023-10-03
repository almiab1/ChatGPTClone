// import { Configuration, OpenAIApi } from "openai-edge";
// import { OpenAIStream, StreamingTextResponse } from "ai";

// export const runtime = "edge";

// // Crear el cliente de OpenAI
// const config = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// const openai = new OpenAIApi(config);

// export async function POST(request) {
//   // Obtener el texto que el usuario envió
//   const response = await openai.createChatCompletion({
//     model: "gpt-3.5-turbo",
//     stream: true,
//     messages: [
//       {
//         role: "system",
//         content: "Comportate como si fueras un humano",
//       },
//       {
//         role: "user",
//         content: "",
//       },
//     ],
//   });

//   // transformar la respuesta de OpenAI en un text-stream
//   const stream = OpenAIStream(response);

//   return new StreamingTextResponse(stream);
// }

import { Configuration, OpenAIApi } from "openai-edge";
import { OpenAIStream, StreamingTextResponse } from "ai";

// Le decimos a Vercel donde queremos ejecutar este endpoint
export const runtime = "edge";

// Crear el cliente de OpenAI
const config = new Configuration({ apiKey: process.env.OPENAI_API_KEY });

const openai = new OpenAIApi(config);

export async function POST(req) {
  // Extract the `messages` from the body of the request
  const { messages } = await req.json();

  // Request the OpenAI API for the response based on the prompt
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    stream: true,
    messages: messages,
    max_tokens: 3000,
    temperature: 0.8,
    top_p: 1,
    frequency_penalty: 1,
    presence_penalty: 1,
  });

  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response);

  // Respond with the stream
  return new StreamingTextResponse(stream);
}
