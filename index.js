const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config()

const configuration = new Configuration({
apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function runCompletion (question, maxToken = 500) {
    console.log(question);
    const completion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: question,
        max_tokens: maxToken
    });
    console.log(completion.data.choices[0].text);
}

function sumValue(a, b) {
    return a + b;
}

const question = "show me a example of test with jest in nodejs for the following function: \n" + sumValue.toString();
runCompletion(question, 1000); 