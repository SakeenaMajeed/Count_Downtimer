#! /usr/bin/env node
import inquirer from 'inquirer';
async function countdown() {
    const { duration } = await inquirer.prompt([
        {
            type: 'input',
            name: 'duration',
            message: 'Enter the duration in seconds:',
            validate: (value) => {
                const parsedValue = parseInt(value);
                if (isNaN(parsedValue) || parsedValue <= 0) {
                    return 'Please enter a positive number.';
                }
                return true;
            },
        },
    ]);
    const durationInMs = duration * 1000;
    let remainingTime = durationInMs;
    console.log(`Starting countdown for ${duration} seconds...`);
    const interval = setInterval(() => {
        const seconds = Math.floor(remainingTime / 1000);
        console.log(`${seconds} seconds remaining...`);
        remainingTime -= 1000;
        if (remainingTime <= 0) {
            clearInterval(interval);
            console.log('Countdown finished!');
        }
    }, 1000);
}
countdown();
