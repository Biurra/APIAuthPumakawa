import { randomBytes } from 'crypto';

export function keyGen() {
    return randomBytes(64).toString('hex');
}