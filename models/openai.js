import OpenAI from "openai";
import { zodTextFormat } from "openai/helpers/zod";
import { z } from "zod";
import dotenv from 'dotenv'
dotenv.config()
const openai = new OpenAI({apiKey:process.env.OPENAI_API_KEY});


async function anaylyzeorder(courtordertext){
  const struct = z.object({
  keyfindings: z.array(z.string()),
});

const response = await openai.responses.parse({
  model: "gpt-4o-2024-08-06",
  input: [
    { role: "system", content: `Extract the related section from this json format`  },
    {
      role: "user",
      content: `${courtordertext}`,
    },
  ],
  text: {
    format: zodTextFormat(struct, "event"),
  },
});

const event = response.output_parsed;
return event
}


async function anaskquery(query2,dataset) {
 const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: "You need to read the json file and give legal answers related to court orders asked and don't give anything different from the json passed to you" },
      { role: "user", content: `The question: ${query2}\n\nThe json file is: ${JSON.stringify(dataset)}` }
    ],
});

return response.choices[0].message.content;

  
}

async function  getEmbedding(text) {
    const embedding = await openai.embeddings.create({
  model: "text-embedding-3-small",
  input: text,
  encoding_format: "float",
});
return embedding.data[0].embedding;
}

export {getEmbedding,openai,anaylyzeorder,anaskquery};