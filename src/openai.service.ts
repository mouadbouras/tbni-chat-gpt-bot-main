import { Configuration, OpenAIApi } from "openai";

export class OpenAiService {
  private configuration: Configuration;
  private openai: OpenAIApi;

  constructor() {
    this.configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });
    this.openai = new OpenAIApi(this.configuration);
  }

  async askChatGPT(
    messages: {
      role;
      content;
    }[]
  ): Promise<string> {
    try {
      const response = await this.openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages,
      });
      return response.data.choices[0].message.content;
    } catch (error) {
      console.log("An Error Occured when communicating with OpenAI");
      return;
    }
  }
}
