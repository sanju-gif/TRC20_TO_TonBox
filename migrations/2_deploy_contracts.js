// var MyContract = artifacts.require("./SendMessage.sol");

// module.exports = function(deployer) {
//   deployer.deploy(MyContract, "Hi QuickNode!");
// };

var TestCoin = artifacts.require("./TestCoin.sol");

module.exports = function(deployer) {
  deployer.deploy(TestCoin);
};