// const SimpleStorage = artifacts.require("SimpleStorage");
const TutorialToken = artifacts.require("TutorialToken");
// const ComplexStorage = artifacts.require("ComplexStorage");

module.exports = function(deployer) {
//   deployer.deploy(SimpleStorage);
  deployer.deploy(TutorialToken);
//   deployer.deploy(ComplexStorage);
};

// const ERC20 = artifacts.require("ERC20");
// const DeepVerseToken = artifacts.require("DeepVerseToken");

// module.exports = function(deployer) {
    // deployer.deploy(ERC20);
    // deployer.link(ERC20, DeepVerseToken);
    // deployer.deploy(DeepVerseToken);
// };

// module.exports = function(deployer) {
//     // deployer.deploy(ERC20, DeepVerseToken);
//     deployer.deploy(DeepVerseToken);
// };


// const ERC20 = artifacts.require("ERC20");
// var TutorialToken = artifacts.require("TutorialToken")

// module.exports = function(deployer) {
//     deployer.deploy(ERC20, "TutorialToken");
// };

// var TutorialToken = artifacts.require("TutorialToken");

// module.exports = function(deployer) {
//   deployer.deploy(TutorialToken);
// };