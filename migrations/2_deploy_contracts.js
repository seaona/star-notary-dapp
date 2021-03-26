const StarNotary = artifacts.require("StarNotary");

module.exports = function(deployer) {
  deployer.deploy(StarNotary, "SeaonaToken", "SEAONA", 1, 1000);
};
