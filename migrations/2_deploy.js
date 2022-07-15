const DappToken = artifacts.require("DappToken");

module.exports = function (deployer) {
   const _name = "DappToken";
   const _symbol = "DAPP";
   const _decimals = 18;
  deployer.deploy(DappToken,_name,_symbol,_decimals);
};
