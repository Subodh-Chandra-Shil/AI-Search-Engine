const { OPENAI_API_KEY } = require("@/keys");
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    apiKey: OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export async function sendMessageToOpenAI(message) {
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: message,
        temperature: 0.9,
        maxTokens: 200,
        top_p: 1,
        n: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
        stop: "\n",
    });

    return response.data.choices[0].text;
}
