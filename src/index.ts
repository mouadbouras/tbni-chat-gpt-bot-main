import { config } from "dotenv";
import { OpenAiService } from "./openai.service.js";

config();

const openAi = new OpenAiService();

const response = await openAi.askChatGPT([
  { role: "user", content: "Who won the world cup in 2018" },
]);

console.log(response);
