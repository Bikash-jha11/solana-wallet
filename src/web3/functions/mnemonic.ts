import { generateMnemonic, mnemonicToSeedSync } from "bip39";
import { Buffer } from 'buffer';


 window.Buffer = Buffer;


export function generatemnemonic() {

    const words = [
        "seed",
        "sock",
        "milk",
        "upd",
        "focu",
        "rot",
        "bar",
        "fade",
        "car",
        "face",
        "mec",
        "mercy",
        "cow",
        "heelo",
        "go",
        "cric",
        "wic",
        "lbw",
        "out"]

    let word = new Array<string>;

    for (let i = 0; i < 12; i++) {
        let idx = Math.floor(Math.random() * 20);

        word.push(words[idx])
    }
    const seed = mnemonicToSeedSync(word.join(","));

    return {seed,word}


}

