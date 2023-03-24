const { Configuration, OpenAIApi } = require("openai");
const fs = require('fs');

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

    const result = completion.data.choices[0].text
    console.log(result);

    const fileName = 'output.js';
    fs.writeFileSync(fileName, `${result}`);
}

function sumValue(a, b) {
    return a + b;
}

const question = "show me a example of test with jest in nodejs for the following function, just show me the example: \n" + sumValue.toString();
runCompletion(question, 1000); 