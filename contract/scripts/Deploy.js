
const hre = require("hardhat");

const main = async()=> {
 
  const Transactions = await hre.ethers.getContractFactory("Transaction");
  const transactions = await Transactions.deploy();

  await transactions.deployed();

  console.log("Transactions deployed to:", transactions.address);
}


const runMainv= async()=>{
  try {
    await main();
    process.exit(0);
    
  } catch (error) {
    console.error(error);
    process.exit(1);    
  }
}
  runMainv();