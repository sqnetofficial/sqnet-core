
(async () => {
    const abi = `
    { "compiler": {
		"version": "0.8.11+commit.d7f03943"
	},
	"language": "Solidity",
	"output": {
		"abi": [
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "_contractOwner",
						"type": "address"
					}
				],
				"stateMutability": "payable",
				"type": "constructor"
			},
			{
				"stateMutability": "payable",
				"type": "fallback"
			},
			{
				"stateMutability": "payable",
				"type": "receive"
			}
		],
		"devdoc": {
			"kind": "dev",
			"methods": {},
			"version": 1
		},
		"userdoc": {
			"kind": "user",
			"methods": {},
			"version": 1
		}
	},
	"settings": {
		"compilationTarget": {
			"Solidity Development/SQNetDiamond/Contracts/diamonds/SQDiamond.sol": "SQDiamond"
		},
		"evmVersion": "london",
		"libraries": {},
		"metadata": {
			"bytecodeHash": "ipfs"
		},
		"optimizer": {
			"enabled": false,
			"runs": 200
		},
		"remappings": []
	},
	"sources": {
		"Solidity Development/SQNetDiamond/Contracts/diamonds/SQDiamond.sol": {
			"keccak256": "0xdc715418680156794c6590ff3663e2201282328b9e4f283f1104880ad9c4c132",
			"license": "MIT",
			"urls": [
				"bzz-raw://5eee287e21863bbf1d9af56e9899d60bfaa4bacbdb81c4cc00f24d50e9cd13d8",
				"dweb:/ipfs/QmdBVoLi8NyCiVYkLydHT6Wxqv9Tac5Eo48siN849pKz2V"
			]
		},
		"Solidity Development/SQNetDiamond/Contracts/facets/DiamondCutFacet.sol": {
			"keccak256": "0xfd640411e6b9500a3c7f04129006cb364cc4f16810d3964d85b97fa00f1af191",
			"license": "MIT",
			"urls": [
				"bzz-raw://af160c6e12e8f0eac00c9a7cb2d87fa4d032474253cd47679a3e8209f552207f",
				"dweb:/ipfs/QmRBWPLDNu1fh8VrE8DvNf5zGSVTKx9Swt3R4SEjycz1z1"
			]
		},
		"Solidity Development/SQNetDiamond/Contracts/facets/DiamondLoupeFacet.sol": {
			"keccak256": "0x8f5526148797c1ed2934541bb30536d9cbecb40720575b60b5a41efb1b71b3d9",
			"license": "MIT",
			"urls": [
				"bzz-raw://3202079b808f1ef12820f23abb567a9c3c6c4efbdf5e909fb103b9e0d58c6d96",
				"dweb:/ipfs/QmazLWYXg2ZNKKbDquBNMYTWc6MNmh5cQFLjYAQTB4eUge"
			]
		},
		"Solidity Development/SQNetDiamond/Contracts/facets/OwnershipFacet.sol": {
			"keccak256": "0xebe60336df690ac081b6e1e7e81b909098c1aa85fe9d71c153fa7adfff502e06",
			"license": "MIT",
			"urls": [
				"bzz-raw://1bea88360c807d3e897cb6cbe66044675eae8a5372cf716963761fda4e195e8d",
				"dweb:/ipfs/QmVxdxdPn8BL3vHxNeEbMSE8xLJ9TsjXgchQH6NAbQmJQU"
			]
		},
		"Solidity Development/SQNetDiamond/Contracts/interfaces/IDiamondCut.sol": {
			"keccak256": "0x7e616d2dfda1b5c03b2de7efbc0e2c6ac472dbba1a60adbd1ca71a183b413254",
			"license": "MIT",
			"urls": [
				"bzz-raw://f5924cddc69e143213c2799547cdfdc8458b3c35d4ba68012785b792b90c522d",
				"dweb:/ipfs/QmfPSzx6JpzNodAvAqgjtJzBaKWEmRY86MMJ2Bo48Wz2Hz"
			]
		},
		"Solidity Development/SQNetDiamond/Contracts/interfaces/IDiamondLoupe.sol": {
			"keccak256": "0x9e87afb355b7bfcafcc235e8eafaaf2c659e4516f8ed614495c9e4cabd1e5a37",
			"license": "MIT",
			"urls": [
				"bzz-raw://38b2a5540472121105986ae5aea4228e695255d2f2d1ef09728e8d56fdf19b38",
				"dweb:/ipfs/QmS4Bzpo3wvnqJJN7QhXRHKgu3SKZvxsAz72dtijfgJriD"
			]
		},
		"Solidity Development/SQNetDiamond/Contracts/interfaces/IERC165.sol": {
			"keccak256": "0xb13213c954303fb6d1ba5e126b946c4cd5bd04f97924eedd5b2e73878b7b00e5",
			"license": "MIT",
			"urls": [
				"bzz-raw://0973066057763f01290a84c94b163315d894229d43ee87aa5fcc7906ef9dbcf7",
				"dweb:/ipfs/Qmdv9xvbrW1PZLnCcP4bautUmQAuKtgURJtNoPm6CndHvP"
			]
		},
		"Solidity Development/SQNetDiamond/Contracts/interfaces/IERC173.sol": {
			"keccak256": "0x11d2a117e57d3a19b6529c3f0a09bea58ec7482b55a4e93d0161166fa0736343",
			"license": "MIT",
			"urls": [
				"bzz-raw://e3127b0386bd23eb05dfd5435953f72e607efdd62c3dca7b43b9a489b316e86c",
				"dweb:/ipfs/Qmeukrvmt2tLbQPb1T6tsfDWutZ2ro1Z5ERpY51JjfHVzG"
			]
		},
		"Solidity Development/SQNetDiamond/Contracts/libraries/LibDiamond.sol": {
			"keccak256": "0x3b13fe63efde2e9cf0a6f0cbc67c51149da661ec1c727ebc54da36d1e1253d49",
			"license": "MIT",
			"urls": [
				"bzz-raw://85b61c6f16699d825ad9f15f4dd1ee4a65c7b8f9c2e2988d2250fa3cbf217677",
				"dweb:/ipfs/QmQZaaZq2KGRP1uxSPuiwzbYfrrj5jSZzVwWCVm27ZMRjy"
			]
		}
	},
	"version": 1
}`;

    const address = "0xd9145CCE52D386f254917e481eB44e9943F39138";

    try {
        const diamond = (await new web3.eth.Contract(abi, address));
        console.log("kaka");
        const block = await web3.eth.getBlock();
        console.log("block: "+block.number);

    } catch(e) {
        console.log(e);
    }
})();