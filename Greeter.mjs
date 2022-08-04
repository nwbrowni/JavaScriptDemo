import { ReadInput } from './FuncReadInput.mjs';

class Greeter {
    constructor(greeting) {
        this._greeting = greeting;
    }

    Greet() {
        console.log(this._greeting+ "!");
    }

    GreetWithName(name) {
        console.log(this._greeting + ", " + name + "!");
    }

    AskForName() {
        return ReadInput("What is your Name?\n");

        /*
        This works but for control at a lower level (possibly) look at promises
        promises do something and then return based on success or error
        it is followed by a .then() that reacts to the promise's return

        let myPromise = new Promise(function(myResolve, myReject) {
            //"Producing Code" (May take some time)

            myResolve(); // when successful
            myReject();  // when error
        });

        //"Consuming Code" (Must wait for a fulfilled Promise)
        myPromise.then(
            function(value) { },  //code if successful 
            function(error) { }  // code if some error
        );

        Here is an example:
        
        <!DOCTYPE html>
        <html>
        <body>

        <h2>JavaScript Promise</h2>  // will print a header

        <p id="demo"></p>

        <script>
        function myDisplayer(some) {
            document.getElementById("demo").innerHTML = some;
        }

        let myPromise = new Promise(function(myResolve, myReject) {
            let x = 0;

            // The producing code (this may take some time)

            if (x == 0) {
                myResolve("OK");
            } else {
                myReject("Error");
            }
        });

        myPromise.then(
            function(value) {myDisplayer(value);},  // will print out "OK"
            function(error) {myDisplayer(error);}
        );
        </script>

        </body>
        </html>

        output will be:
        JavaScript Promise
        OK

        additionally promises can be used with await/async as well...
        */
    }
}

export { Greeter }