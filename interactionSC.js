// 0x9aa9a4197ae667494039a102446d7eb3e12b01f1

const {ethers,providers} = require("ethers");
const provider= new ethers.providers.JsonRpcProvider(`https://goerli.infura.io/v3/b5b4eb9d774e44178a95adfe30898e23`);

const walletaddress="0xc4c6e70c8a0b22c2884a03c2dacd6d88b1413a51";


const walletabi=[
	{
		"inputs": [],
		"name": "sendEthContract",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "sendEthUser",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_num",
				"type": "uint256"
			}
		],
		"name": "setValue",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "accountBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "contractBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getValue",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

const contractinteraction = async ()=>{
    const walletcontract = new ethers.Contract(walletaddress,walletabi,provider);


    const contractname = await walletcontract.name(); 
    console.log("name is: ",contractname);

    const num = await walletcontract.getValue();
    console.log("number value:", String(num));

    const contractbal =await walletcontract.contractBalance();
    console.log("Contract Balance",ethers.utils.formatEther(contractbal));

    const userbal =await walletcontract.accountBalance("0x46FC374d89D8FAb2dcbBACbDbD9Eb620D1A2AA8D");
    console.log("User Balance",ethers.utils.formatEther(userbal));
}

contractinteraction();