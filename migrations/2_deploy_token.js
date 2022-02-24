const ERC721Preset = artifacts.require("ERC721PresetMinterPauserAutoId");

module.exports = function(deployer) {
    deployer.deploy(ERC721Preset, "Charmander", "CHA", "https://gateway.pinata.cloud/ipfs/QmQ5j5SFUNwGduniXDn4KJ1BBn2DVYMXeT4z2K9VwZHPDF/" );
}