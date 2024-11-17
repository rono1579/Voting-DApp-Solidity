# Kura: A Decentralized Voting DApp

Kura is a decentralized application (DApp) that leverages Ethereum blockchain technology to provide a secure and transparent voting system. Built with Solidity, Hardhat, and a React frontend, Kura allows users to vote for candidates in a decentralized manner using their MetaMask wallets.

## Table of Contents
- [Introduction](#introduction)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Application Overview](#application-overview)
- [Future Enhancements](#future-enhancements)
- [Screenshots](#screenshots)

## Introduction
Kura provides a secure, transparent voting platform where each vote is recorded on the blockchain, ensuring integrity and immutability. The application simulates real-world voting systems in a Web3 environment, using Solidity for backend logic and a React frontend for an engaging user experience.

## Technologies Used
- **Solidity**: For implementing the voting logic as a smart contract on Ethereum.
- **Hardhat**: Ethereum development environment to compile, test, and deploy the contract.
- **Ganache**: Local blockchain for testing and development.
- **React**: Frontend framework for building the Web3 interface.
- **Ethers.js**: Ethereum JavaScript library for interacting with the blockchain.
- **Tailwind CSS**: Styling library for a responsive, modern UI.

## Features
- **Blockchain-Backed Voting**: Ensures secure and immutable records of votes.
- **MetaMask Wallet Authentication**: Users connect their MetaMask wallet to verify identity and cast votes.
- **Real-Time Voting Status**: Displays active voting session status and remaining time.
- **Vote Once Mechanism**: Each voter can cast only one vote per session, enforcing fairness.

## Prerequisites
- Node.js (v14 or later)
- Hardhat for contract development
- Ganache for local blockchain testing
- MetaMask for connecting to the Ethereum network via browser

## Installation
Clone the repository and install dependencies:
```bash
git clone https://github.com/TheODDYSEY/Voting-DApp-Solidity
cd Voting-DApp-Solidity
npm install
API_URL=http://127.0.0.1:7545
PRIVATE_KEY=your_ganache_private_key
npx hardhat compile
npx hardhat run scripts/deploy.js --network ganache
npx hardhat test --network ganache
npm start
