require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace creek olympic short north rescue spawn purse install pet swing skirt'; 
let testAccounts = [
"0x57e789a47f4af57cf91d01802cad4fcd388af9b8d6da4b0b4760b3183f6eed08",
"0x13b0c6971f8edecd8e168f093f2892a96cacd5496e999d673cd8828ab31b804b",
"0x08b07496959d63c1b8a2276e8e2bb69f30e16387b24cf642db45a6f10c6c23e8",
"0xe27ecb932c8a96911bf9f5d2b1d6172ca87cccb92b9144e42bf2f81324cbaebe",
"0x347cc33bfc01b64bfd60de60a38b9a9c5f4754003e0c04a77f5657950eb5b54a",
"0x605de5697a74631aaf064df4243e342912a4396c91b8d6284ee6e766d2f08db5",
"0x703b412bfaf6ae6e47210d7c70ebeee9377f3171ba997ceb0d307100b95d8f71",
"0x6680fc5f6f890670653ccf893e68e0453c5b0eb1ad45940fbf851a23e1480f0b",
"0x9a671265aa82cf594e45b0d04a6d0fb507e4423743b12abbbefcec430428519b",
"0xab7a0e1ae3b47632da070befaf68b39242b03bb6738620031580545c7d51b8ec"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

