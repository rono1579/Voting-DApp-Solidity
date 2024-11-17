// hardhat.config.js
require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
   solidity: "0.8.11",
   defaultNetwork: "ganache", // Set Ganache as the primary network
   networks: {
      hardhat: {},
      volta: {
         url: API_URL,
         accounts: [`0x${PRIVATE_KEY}`],
         gas: 210000000,
         gasPrice: 800000000000,
      },
      ganache: {
         url: "http://127.0.0.1:7545", // Ganache's default URL
         accounts: [`0x${PRIVATE_KEY}`], // Private key for the Ganache account
      }
   },
};
