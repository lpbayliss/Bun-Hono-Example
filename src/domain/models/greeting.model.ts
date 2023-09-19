const greetings = [
    'Hello',
    'Kia Ora',
    'Kon\'nichiwa',
    'Bonjour',
]

export default class Greeting {
    private greeting: string;

    constructor() {
        this.greeting = greetings[(Math.floor(Math.random() * greetings.length))]
    }

    public greet = (name: string) => `${this.greeting} ${name}!`;
}