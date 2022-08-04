import * as readline from 'node:readline';
import process from 'node:process';

async function ReadInput(prompttext) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
      
    const question = prompt => {
        return new Promise((resolve, reject) => {
            rl.question(prompt, resolve)
        })
    }

    const answer = await question(prompttext);

    rl.close();
    return answer;
}

export { ReadInput }