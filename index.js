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

async function showMessageError (question) {
    console.log(question);
    const completion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: question,
        max_tokens: 500
    });
    console.log(completion.data.choices[0].text);
}

// showMessageError("display an error message when HTTP is 404.");
// runCompletion("How are you today ?");

const question = "show me a example of test with jest in nodejs for the following function: \n" + showMessageError.toString();
runCompletion(question, 1000); 