const {Blockchain, Transaction} = require("./blockchain")
const EC = require('elliptic').ec;
const ec = new EC("secp256k1")

const myKey = ec.keyFromPrivate("af11c092aa647c96d8380c8c8a55c594c5ea4f06ff929fd25f0739aeaf010ed7")
const myWalletAddress = myKey.getPublic('hex')

let gregsCoin = new Blockchain();

const trans = new Transaction(myWalletAddress, "public key goes here", 10)
trans.signTransaction(myKey);
gregsCoin.addTransaction(trans)

gregsCoin.minePendingTransaction(myWalletAddress)
gregsCoin.minePendingTransaction(myWalletAddress)
gregsCoin.minePendingTransaction(myWalletAddress)


console.log("Balance of My Wallet: " + gregsCoin.getBalanceOfAddress(myWalletAddress));

console.log("Is chain valid? " + gregsCoin.isChainValid());
