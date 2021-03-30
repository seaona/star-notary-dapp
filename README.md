
# Star Notary Dapp
## Summary
In this project, I've created a dapp that allows Users to create stars and 

![](assets/star-notary-dapp.png)
This dapp is deployed on Rinkeby

## Config & Basic Info
- ERC-721 Token Name: "Seaona"
- Your ERC-721 Token Symbol: "SEA"
- Contract Address: 0xBE4B214a884B6D091a872ce33b7a9261f8f7556c
- Transaction Hash (Rinkeby): 0x448c8c90338b35fc1a8b9eec90ace0f342675cec6845d186c77248a8b4bf6560
- Version of the Truffle and OpenZeppelin used: 


## Flow
This dapp supports 2 main functionalities:
 ### Create a Star
 This will generate a new transaction and create an ERC721 token corresponding to that Star name and id.

 ### Look for a Star by Id
 This will search for a Star which maps that corresponding id.

![](assets/star-notary-dapp.png)


## Running Mocha & Chai Tests
In this project, you can find the Unit Tests inside the test folder. 
As Truffle supports and comes preinstalled with Mocha and Chai this is the technology used.
You can run the tests with the commands:
1. ``truffle develop``
2. Inside the truffle console: ``test``


Chai is an Assertion Library
![](assets/tests.gif)

## TODO List
- [x] StarNotary tokens created (SEA tokens).
- [x] Function that looks up the stars using the Token ID, and then returns the name of the star.
- [x] Function called exchangeStars, so 2 users can exchange their star tokens.
- [x] Function for transfer stars between owners.
- [x] Star tokens can be transferred from one address to another
- [x] Unit Tests added
- [x] Deployment on Rinkeby
- [x] Frontend version 1: support creation of stars and look up for stars by id
- [ ] Code refactor for separating styles from html
- [ ] Frontend version 2: support transfer of stars and stars exchange
- [ ] Design: optimize design for mobile, add responsiveness, improve last details
