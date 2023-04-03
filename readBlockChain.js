const {ethers, providers} = require("ethers");

const provider = new ethers.providers.JsonRpcBatchProvider(`https://mainnet.infura.io/v3/b5b4eb9d774e44178a95adfe30898e23`);

const queryBlockchain =async()=>{

    // const block =await provider.getBlockNumber();
    // console.log("Current block Number: ",block);

    const balance= await provider.getBalance("0x24d6C74D811cfDe65995Ed26FD08Af445f8aaB06");
    console.log("balance in bn: ",balance);

    const balether = ethers.utils.formatEther(balance);
    console.log("balance in ether: ", balether);

    
}

queryBlockchain();