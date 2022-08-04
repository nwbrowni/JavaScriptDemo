import { GreeterFactory } from './GreeterFactory.mjs'
import { GreeterFactoryMenu } from './GreeterInteractionMenu.mjs'

async function main() {
    /*
    let gf = new GreeterFactory();
    let g = gf.BuildGreeter("Midwesterner");

    g.Greet();

    let dg = gf.BuildDoorGreeter("Spanish");

    dg.GreetWithName(await dg.AskForName());
    */

    let gfm = new GreeterFactoryMenu();

    await gfm.Start();
}

main();