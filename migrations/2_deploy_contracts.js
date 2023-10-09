// var MyContract = artifacts.require("./SendMessage.sol");

// module.exports = function(deployer) {
//   deployer.deploy(MyContract, "Hi QuickNode!");
// };

// var TestCoin = artifacts.require("./TestCoin.sol");

// module.exports = function(deployer) {
//   deployer.deploy(TestCoin);
// };

const SimpleToken = artifacts.require("SimpleToken");

module.exports = function(deployer) {
    deployer.deploy(SimpleToken, 1000000000); // Initial supply: 1,000,000,000
};
