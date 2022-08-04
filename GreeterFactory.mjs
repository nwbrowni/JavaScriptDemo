import { Greeter } from './Greeter.mjs'
import { DoorGreeter } from './DoorGreeter.mjs'

class GreeterFactory {
    BuildGreeter() {
        return new Greeter("Hello")
    }

    BuildGreeter(type) {
        if (type == "Midwesterner") {
            return new Greeter("Howdy");
        }
        else if (type == "Italian") {
            return new Greeter("Chow");
        }
        else if (type == "Spanish") {
            return new Greeter("Hola");
        }
        else if (type == "Formal") {
            return new Greeter("Good day")
        }
        else {
            return new Greeter("Hello");
        }
    }

    BuildCustomGreeter(greeting) {
        return new Greeter(greeting);
    }

    BuildDoorGreeter() {
        return new DoorGreeter("Hello");
    }

    BuildDoorGreeter(type) {
        if (type == "Midwesterner") {
            return new DoorGreeter("Howdy");
        }
        else if (type == "Italian") {
            return new DoorGreeter("Chow");
        }
        else if (type == "Spanish") {
            return new DoorGreeter("Hola");
        }
        else if (type == "Formal") {
            return new DoorGreeter("Good day")
        }
        else {
            return new DoorGreeter("Hello");
        }
    }

    BuildCustomDoorGreeter(greeter) {
        return new DoorGreeter(greeting);
    }
}

export { GreeterFactory }