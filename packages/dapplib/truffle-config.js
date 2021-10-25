require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict lobster flee spot bitter birth nominee clutch include clog old secret'; 
let testAccounts = [
"0xcb82fc040edad77b7ce1d8f3c8129a5fbf01fe1fe6e674b1f07160961e24dd14",
"0xb2f168f82c8e1897be0a009afa442a7fead9ac5e953d5192bd91da3bd543795d",
"0x1f79ea3c46ca6a0018bb14406d18be08802d45ba07169502cbbe57ef91ea8448",
"0x21689e2c0d44977d213ad904437472e508049999b730156cbc5af3d6c29319b8",
"0x2285149ae15473a78747fd3f3c8ece906ee449ae41c71576e86c6fd3b837ce03",
"0x0fd65fddcd364bba87bdc8adf75698254670e8b97eeb293f2e6aaa176cc7b5c2",
"0x62fd7a3b378c853b99a3c3f8de2edc89819048dc061db969ab686b3ef64988da",
"0x6b563f2bcf9b7d5b27bb41b55ef16f936601cf4743726d36cef04c692c859f15",
"0xf3b8543957b28046b167e8a98a14889addf2160ee83e9817e4ca4ff8c078f6d6",
"0xd78ade7922c8a593bcb9774354489f1b821d5a1d883a133cd1c2ab05fd39bc40"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

