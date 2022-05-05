import { create } from 'ipfs-http-client';


export async function post(file: Buffer) {
    let ipfs = create({
        host: 'ipfs.infura.io',
        port: 5001,
        protocol: 'https',
    })

    return await ipfs.add(file);
}

export async function get(cid: string) {
    let ipfs = create({
        host: 'ipfs.infura.io',
        port: 5001,
        protocol: 'https',
    })

    return ipfs.get(cid);
}