import { Greeter } from './Greeter.mjs'

class DoorGreeter extends Greeter {
    constructor(greeting) {
        super(greeting);
        this._dooropenstatement = "Please come in"
    }

    Greet() {
        console.log(this._greeting + "!")
        this.DoorOpenWelcome();
    }

    GreetWithName(name) {
        console.log(this._greeting + ", " + name + "!");
        this.DoorOpenWelcome();
    }

    DoorOpenWelcome() {
        console.log(this._dooropenstatement + ".")
    }
}

export { DoorGreeter }