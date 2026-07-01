import { randomBytes } from 'crypto';

function keyGen() {
    return randomBytes(64).toString('hex');
}

console.log(keyGen());

export default keyGen;