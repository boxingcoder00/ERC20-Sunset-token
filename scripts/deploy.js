const hre = require("hardhat");

async function main() {
  const SunsetToken = await hre.ethers.getContractFactory("SunsetToken");
  const sunsetToken = await SunsetToken.deploy(100000000, 50);

  await sunsetToken.deployed();

  console.log("SunsetToken deployed: ", sunsetToken.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});