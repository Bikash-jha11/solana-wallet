import { generatemnemonic } from './mnemonic'
import { derivePath } from 'ed25519-hd-key'
import nacl from 'tweetnacl'
import * as web3 from '@solana/web3.js'
import bs58 from 'bs58';



export function generateHDwallet(i: number) {
    const seed = generatemnemonic();
    const hdPath = `m/44'/501'/${i}'/0'`;

    const { key } = derivePath(hdPath, seed.toString('hex'));

    const secret = nacl.sign.keyPair.fromSeed(key);
    const privatekey = bs58.encode(secret.secretKey);
    const publickey = bs58.encode(secret.publicKey);


    return { publickey, privatekey }
}

