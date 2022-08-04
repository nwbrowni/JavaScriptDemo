import { ReadInput } from './FuncReadInput.mjs';
import { GreeterFactory } from './GreeterFactory.mjs'
import { Greeter } from './Greeter.mjs'

class GreeterFactoryMenu {
    async Start() {
        let gf = new GreeterFactory();
        let g = new Greeter();  // the greeter

        while (true) {
            this.PrintGreeterFactoryMenu();
            let response = await this.GetGreeterFactoryMenuResponse();

            if (response == "Invalid Selection") {
                continue;
            }
            else if (response == "1") {
                while (true) {
                    this.PrintGreeterFactoryMenuStandardGreeterMenu();
                    let sgmresponse = await this.GetGreeterFactoryMenuStandardGreeterResponse();

                    if (sgmresponse == "Invalid Selection") {
                        continue;
                    }
                    else if (sgmresponse == "1") {
                        g = gf.BuildGreeter("Midwesterner");
                    }
                    else if (sgmresponse == "2") {
                        g = gf.BuildGreeter("Italian");
                    }
                    else if (sgmresponse == "3") {
                        g = gf.BuildGreeter("Spanish");
                    }
                    else if (sgmresponse == "4") {
                        g = gf.BuildGreeter("Formal");
                    }
                    else if (sgmresponse == "5") {
                        g = gf.BuildGreeter();
                    }
                    else if (sgmresponse == "6") {
                        break;
                    }
                }
            }
            else if (response == "2") {
                while (true) {
                    this.PrintGreeterFactoryMenuStandardGreeterViewMenu();
                    let sgvmresponse = await this.GetGreeterFactoryMenuStandardGreeterResponse();

                    if (sgvmresponse == "Invalid Selection") {
                        continue;
                    }
                    else if (sgvmresponse == "1") {
                        g = gf.BuildGreeter("Midwesterner");
                        g.Greet();
                    }
                    else if (sgvmresponse == "2") {
                        g = gf.BuildGreeter("Italian");
                        g.Greet();
                    }
                    else if (sgvmresponse == "3") {
                        g = gf.BuildGreeter("Spanish");
                        g.Greet();
                    }
                    else if (sgvmresponse == "4") {
                        g = gf.BuildGreeter("Formal");
                        g.Greet();
                    }
                    else if (sgvmresponse == "5") {
                        g = gf.BuildGreeter();
                        g.Greet();
                    }
                    else if (sgvmresponse == "6") {
                        break;
                    }
                }
            }
            else if (response == "3") {
                let gcgmresponse = await this.PrintGreeterFactoryMenuGenerateCustomGreeterMenu();

                g = gf.BuildCustomGreeter(gcgmresponse);
            }
            else if (response == "4") {
                break;
            }
        }

        g.Greet();
    }

    PrintGreeterFactoryMenu() {
        console.log("Greeter Factory Menu:");
        console.log("1) Generate standard greeter");
        console.log("2) See standard greeter and greetings");
        console.log("3) Generate greeter with custom greeting");
        console.log("4) Exit");
    }
    
    async GetGreeterFactoryMenuResponse() {
        let response = await ReadInput(">> ");

        if (response != "1" && response != "2" && response != "3" && response != "4") {
            return "Invalid Selection";
        }

        return response;
    }

    PrintGreeterFactoryMenuStandardGreeterMenu() {
        console.log("Standard Greeter Menu:");
        console.log("1) Midwesterner");
        console.log("2) Italian");
        console.log("3) Spanish");
        console.log("4) Formal");
        console.log("5) Default");
        console.log("6) Exit");
    }

    
    async GetGreeterFactoryMenuStandardGreeterResponse() {
        let response = await ReadInput(">> ");

        if (response != "1" && response != "2" && response != "3" && response != "4" && response != "5" && response != "6") {
            return "Invalid Selection";
        }

        return response;
    }

    PrintGreeterFactoryMenuStandardGreeterViewMenu() {
        console.log("Standard Greeter View Menu:");
        console.log("1) Midwesterner");
        console.log("2) Italian");
        console.log("3) Spanish");
        console.log("4) Formal");
        console.log("5) Default");
        console.log("6) Exit");
    }

    
    async GetGreeterFactoryMenuStandardGreeterViewResponse() {
        let response = await ReadInput(">> ");

        if (response != "1" && response != "2" && response != "3" && response != "4" && response != "5" && response != "6") {
            return "Invalid Selection";
        }

        return response;
    }

    async PrintGreeterFactoryMenuGenerateCustomGreeterMenu() {
        console.log("Generate Custom Greeter Menu:");
        return await ReadInput("What do you want your custom greeting to be? ");
    }
}

export { GreeterFactoryMenu }