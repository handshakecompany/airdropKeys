/*
 * Bmonic
 *
 * Repurposed lib for generating mnemonic keys 
 * and addresses in the browser. Uses
 * primitives/address.js and hd/private.js from hskd
 * but with Consensus and Network dependencies removed
 */

const ENTROPY = 256

const Mnemonic = require('./mnemonic');
const HDPrivateKey = require('./private');
const Address = require('./address')

function bMonic (params) {

  this.newKey = () => {
	  const mnemonic = new Mnemonic({language: params.lang, bits: ENTROPY})
    const key = HDPrivateKey.fromMnemonic(mnemonic)
    const phrase = mnemonic.getPhrase()

    const address = new Address
    const addr = address.fromPubkey(Buffer.from(key.publicKey))
    return { 
      phrase: phrase,
      address: addr.hash
    }
  }
}

window.bMonic = bMonic

