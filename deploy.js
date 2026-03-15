const hre = require("hardhat");

async function main() {
  console.log("正在部署合约...");
  // 获取合约工厂
  const CopyrightProof = await hre.ethers.getContractFactory("CopyrightProof");

  // 部署合约
  const contract = await CopyrightProof.deploy();
  await contract.waitForDeployment();

  // 获取合约地址
  const address = await contract.getAddress();

  console.log("=============================================");
  console.log("🎉 合约部署成功！");
  console.log("合约地址:", address);
  console.log("请立即把这个地址复制到 .env 文件中！");
  console.log("=============================================");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});