/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  LFWUtils_Avalanche,
  LFWUtils_AvalancheInterface,
} from "../../../contracts/LFWUtils_Avalanche.sol/LFWUtils_Avalanche";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_scAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_userAddress",
        type: "address",
      },
    ],
    name: "getBenqiStakingInfo",
    outputs: [
      {
        internalType: "uint256[]",
        name: "stakingInfo",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_scAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_userAddress",
        type: "address",
      },
    ],
    name: "getGMXStakingInfo",
    outputs: [
      {
        internalType: "uint256[]",
        name: "stakingInfo",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_userAddress",
        type: "address",
      },
    ],
    name: "getTraderJoeFarmingV1Info",
    outputs: [
      {
        internalType: "uint256[]",
        name: "farmingInfo",
        type: "uint256[]",
      },
      {
        internalType: "address[]",
        name: "farmingData",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_userAddress",
        type: "address",
      },
    ],
    name: "getTraderJoeFarmingV2Info",
    outputs: [
      {
        internalType: "uint256[]",
        name: "farmingInfo",
        type: "uint256[]",
      },
      {
        internalType: "address[]",
        name: "farmingData",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_userAddress",
        type: "address",
      },
    ],
    name: "getTraderJoeFarmingV3Info",
    outputs: [
      {
        internalType: "uint256[]",
        name: "farmingInfo",
        type: "uint256[]",
      },
      {
        internalType: "address[]",
        name: "farmingData",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_scAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_userAddress",
        type: "address",
      },
    ],
    name: "getTraderJoeStakingInfo",
    outputs: [
      {
        internalType: "uint256[]",
        name: "stakingInfo",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_scAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_userAddress",
        type: "address",
      },
    ],
    name: "getWonderlandStakingInfos",
    outputs: [
      {
        internalType: "uint256[]",
        name: "stakingInfo",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405260056000556002600155600360025573a7d7079b0fead91f3e65f86e8915cb59c1a4c664600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555073b97ef9ef8734c71904d8002f8b6bc66dd9c48a6e600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550730da67235dd5787d67955420c84ca1cecd4e5bb3b600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550736e84a6216ea6dacc71ee8e6b0a5b7322eebc0fdd600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550734483f0b6e2f5486d06958c20f8c39a7abe87bf8f600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555073d6a4f121ca35509af06a0be99093d08462f53052600860006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555073188bed1968b795d5c9022f6a0bb5931ac4c18f00600960006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061ea60600a5561016d600b556301e13380600c5562015180600d5534801561028d57600080fd5b506124d08061029d6000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c806355b3b7651161005b57806355b3b7651461011557806363fde317146101455780639fa41dfd14610175578063c3e72ed7146101a55761007d565b80630898471a146100825780632916b5db146100b35780633c1f7a28146100e4575b600080fd5b61009c60048036038101906100979190611d84565b6101d5565b6040516100aa929190612068565b60405180910390f35b6100cd60048036038101906100c89190611d84565b6106ab565b6040516100db929190612068565b60405180910390f35b6100fe60048036038101906100f99190611d84565b610b79565b60405161010c929190612068565b60405180910390f35b61012f600480360381019061012a9190611bd2565b611047565b60405161013c9190612046565b60405180910390f35b61015f600480360381019061015a9190611bd2565b61127c565b60405161016c9190612046565b60405180910390f35b61018f600480360381019061018a9190611bd2565b611443565b60405161019c9190612046565b60405180910390f35b6101bf60048036038101906101ba9190611bd2565b611700565b6040516101cc9190612046565b60405180910390f35b60608060015467ffffffffffffffff8111156101f4576101f36123d3565b5b6040519080825280602002602001820160405280156102225781602001602082028036833780820191505090505b50915060025467ffffffffffffffff811115610241576102406123d3565b5b60405190808252806020026020018201604052801561026f5781602001602082028036833780820191505090505b5090506000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508073ffffffffffffffffffffffffffffffffffffffff1663ffcd426386866040518363ffffffff1660e01b81526004016102d49291906120ba565b60006040518083038186803b1580156102ec57600080fd5b505afa158015610300573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052508101906103299190611dc4565b90915090505083600081518110610343576103426123a4565b5b6020026020010181815250508073ffffffffffffffffffffffffffffffffffffffff166393f1a40b86866040518363ffffffff1660e01b815260040161038a9291906120ba565b60606040518083038186803b1580156103a257600080fd5b505afa1580156103b6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103da9190611e87565b905050836001815181106103f1576103f06123a4565b5b60200260200101818152505060008173ffffffffffffffffffffffffffffffffffffffff16631526fe27876040518263ffffffff1660e01b8152600401610438919061209f565b6101206040518083038186803b15801561045157600080fd5b505afa158015610465573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104899190611c8d565b5050505050505050905060008190508073ffffffffffffffffffffffffffffffffffffffff16630dfe16816040518163ffffffff1660e01b815260040160206040518083038186803b1580156104de57600080fd5b505afa1580156104f2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105169190611ba5565b8460008151811061052a576105296123a4565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250508073ffffffffffffffffffffffffffffffffffffffff1663d21220a76040518163ffffffff1660e01b815260040160206040518083038186803b1580156105aa57600080fd5b505afa1580156105be573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105e29190611ba5565b846001815181106105f6576105f56123a4565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff1681525050600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1684600281518110610667576106666123a4565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250505050509250929050565b60608060015467ffffffffffffffff8111156106ca576106c96123d3565b5b6040519080825280602002602001820160405280156106f85781602001602082028036833780820191505090505b50915060025467ffffffffffffffff811115610717576107166123d3565b5b6040519080825280602002602001820160405280156107455781602001602082028036833780820191505090505b5090506000600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508073ffffffffffffffffffffffffffffffffffffffff1663ffcd426386866040518363ffffffff1660e01b81526004016107aa9291906120ba565b60006040518083038186803b1580156107c257600080fd5b505afa1580156107d6573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052508101906107ff9190611dc4565b90915090505083600081518110610819576108186123a4565b5b6020026020010181815250508073ffffffffffffffffffffffffffffffffffffffff166393f1a40b86866040518363ffffffff1660e01b81526004016108609291906120ba565b604080518083038186803b15801561087757600080fd5b505afa15801561088b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108af9190611e47565b50836001815181106108c4576108c36123a4565b5b60200260200101818152505060008173ffffffffffffffffffffffffffffffffffffffff16631526fe27876040518263ffffffff1660e01b815260040161090b919061209f565b60a06040518083038186803b15801561092357600080fd5b505afa158015610937573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061095b9190611c12565b50505050905060008190508073ffffffffffffffffffffffffffffffffffffffff16630dfe16816040518163ffffffff1660e01b815260040160206040518083038186803b1580156109ac57600080fd5b505afa1580156109c0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109e49190611ba5565b846000815181106109f8576109f76123a4565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250508073ffffffffffffffffffffffffffffffffffffffff1663d21220a76040518163ffffffff1660e01b815260040160206040518083038186803b158015610a7857600080fd5b505afa158015610a8c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ab09190611ba5565b84600181518110610ac457610ac36123a4565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff1681525050600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1684600281518110610b3557610b346123a4565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250505050509250929050565b60608060015467ffffffffffffffff811115610b9857610b976123d3565b5b604051908082528060200260200182016040528015610bc65781602001602082028036833780820191505090505b50915060025467ffffffffffffffff811115610be557610be46123d3565b5b604051908082528060200260200182016040528015610c135781602001602082028036833780820191505090505b5090506000600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508073ffffffffffffffffffffffffffffffffffffffff1663ffcd426386866040518363ffffffff1660e01b8152600401610c789291906120ba565b60006040518083038186803b158015610c9057600080fd5b505afa158015610ca4573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f82011682018060405250810190610ccd9190611dc4565b90915090505083600081518110610ce757610ce66123a4565b5b6020026020010181815250508073ffffffffffffffffffffffffffffffffffffffff166393f1a40b86866040518363ffffffff1660e01b8152600401610d2e9291906120ba565b604080518083038186803b158015610d4557600080fd5b505afa158015610d59573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d7d9190611e47565b5083600181518110610d9257610d916123a4565b5b60200260200101818152505060008173ffffffffffffffffffffffffffffffffffffffff16631526fe27876040518263ffffffff1660e01b8152600401610dd9919061209f565b60a06040518083038186803b158015610df157600080fd5b505afa158015610e05573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e299190611c12565b50505050905060008190508073ffffffffffffffffffffffffffffffffffffffff16630dfe16816040518163ffffffff1660e01b815260040160206040518083038186803b158015610e7a57600080fd5b505afa158015610e8e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610eb29190611ba5565b84600081518110610ec657610ec56123a4565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250508073ffffffffffffffffffffffffffffffffffffffff1663d21220a76040518163ffffffff1660e01b815260040160206040518083038186803b158015610f4657600080fd5b505afa158015610f5a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f7e9190611ba5565b84600181518110610f9257610f916123a4565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff1681525050600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1684600281518110611003576110026123a4565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250505050509250929050565b6060600267ffffffffffffffff811115611064576110636123d3565b5b6040519080825280602002602001820160405280156110925781602001602082028036833780820191505090505b509050600083905060008173ffffffffffffffffffffffffffffffffffffffff16630ce4018a6040518163ffffffff1660e01b815260040160206040518083038186803b1580156110e257600080fd5b505afa1580156110f6573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061111a9190611ba5565b905060008190508073ffffffffffffffffffffffffffffffffffffffff1663402914f5866040518263ffffffff1660e01b815260040161115a9190612002565b60206040518083038186803b15801561117257600080fd5b505afa158015611186573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111aa9190611d57565b846000815181106111be576111bd6123a4565b5b6020026020010181815250508073ffffffffffffffffffffffffffffffffffffffff166310c1c103866040518263ffffffff1660e01b81526004016112039190612002565b60206040518083038186803b15801561121b57600080fd5b505afa15801561122f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112539190611d57565b84600181518110611267576112666123a4565b5b60200260200101818152505050505092915050565b6060600267ffffffffffffffff811115611299576112986123d3565b5b6040519080825280602002602001820160405280156112c75781602001602082028036833780820191505090505b50905060008390508073ffffffffffffffffffffffffffffffffffffffff166370a08231846040518263ffffffff1660e01b81526004016113089190612002565b60206040518083038186803b15801561132057600080fd5b505afa158015611334573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113589190611d57565b8260018151811061136c5761136b6123a4565b5b6020026020010181815250508073ffffffffffffffffffffffffffffffffffffffff16634a36d6c1836001815181106113a8576113a76123a4565b5b60200260200101516040518263ffffffff1660e01b81526004016113cc919061209f565b60206040518083038186803b1580156113e457600080fd5b505afa1580156113f8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061141c9190611d57565b826000815181106114305761142f6123a4565b5b6020026020010181815250505092915050565b6060600267ffffffffffffffff8111156114605761145f6123d3565b5b60405190808252806020026020018201604052801561148e5781602001602082028036833780820191505090505b509050600083905060008173ffffffffffffffffffffffffffffffffffffffff1663f2801fe785600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040518363ffffffff1660e01b81526004016114f592919061201d565b604080518083038186803b15801561150c57600080fd5b505afa158015611520573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115449190611e47565b84600181518110611558576115576123a4565b5b6020026020010181935082815250505060008273ffffffffffffffffffffffffffffffffffffffff16633c97d5ae6040518163ffffffff1660e01b815260040160206040518083038186803b1580156115b057600080fd5b505afa1580156115c4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115e89190611d57565b905060008373ffffffffffffffffffffffffffffffffffffffff16635dcea4d4600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040518263ffffffff1660e01b81526004016116479190612002565b60206040518083038186803b15801561165f57600080fd5b505afa158015611673573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116979190611d57565b9050828282876001815181106116b0576116af6123a4565b5b60200260200101516116c291906121dc565b6116cc91906121ab565b6116d69190612236565b856000815181106116ea576116e96123a4565b5b6020026020010181815250505050505092915050565b606060005467ffffffffffffffff81111561171e5761171d6123d3565b5b60405190808252806020026020018201604052801561174c5781602001602082028036833780820191505090505b50905060008390508073ffffffffffffffffffffffffffffffffffffffff1663211dc32d84600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040518363ffffffff1660e01b81526004016117b192919061201d565b60206040518083038186803b1580156117c957600080fd5b505afa1580156117dd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118019190611d57565b82600081518110611815576118146123a4565b5b6020026020010181815250508073ffffffffffffffffffffffffffffffffffffffff166370a08231846040518263ffffffff1660e01b815260040161185a9190612002565b60206040518083038186803b15801561187257600080fd5b505afa158015611886573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118aa9190611d57565b826001815181106118be576118bd6123a4565b5b6020026020010181815250506000600c548273ffffffffffffffffffffffffffffffffffffffff1663bcd11014600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040518263ffffffff1660e01b815260040161192a9190612002565b60206040518083038186803b15801561194257600080fd5b505afa158015611956573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061197a9190611d57565b61198491906121dc565b90506000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231876040518263ffffffff1660e01b81526004016119e39190612002565b60206040518083038186803b1580156119fb57600080fd5b505afa158015611a0f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a339190611d57565b90508184600281518110611a4a57611a496123a4565b5b6020026020010181815250508084600381518110611a6b57611a6a6123a4565b5b602002602001018181525050600084600481518110611a8d57611a8c6123a4565b5b60200260200101818152505050505092915050565b6000611ab5611ab084612108565b6120e3565b905082815260208101848484011115611ad157611ad0612407565b5b611adc8482856122e2565b509392505050565b600081359050611af381612427565b92915050565b600081519050611b0881612427565b92915050565b600082601f830112611b2357611b22612402565b5b8151611b33848260208601611aa2565b91505092915050565b600081359050611b4b8161243e565b92915050565b600081519050611b608161243e565b92915050565b600081519050611b7581612455565b92915050565b600081519050611b8a8161246c565b92915050565b600081519050611b9f81612483565b92915050565b600060208284031215611bbb57611bba612411565b5b6000611bc984828501611af9565b91505092915050565b60008060408385031215611be957611be8612411565b5b6000611bf785828601611ae4565b9250506020611c0885828601611ae4565b9150509250929050565b600080600080600060a08688031215611c2e57611c2d612411565b5b6000611c3c88828901611af9565b9550506020611c4d88828901611b51565b9450506040611c5e88828901611b51565b9350506060611c6f88828901611b51565b9250506080611c8088828901611af9565b9150509295509295909350565b60008060008060008060008060006101208a8c031215611cb057611caf612411565b5b6000611cbe8c828d01611af9565b9950506020611ccf8c828d01611b90565b9850506040611ce08c828d01611b51565b9750506060611cf18c828d01611b51565b9650506080611d028c828d01611b7b565b95505060a0611d138c828d01611af9565b94505060c0611d248c828d01611b66565b93505060e0611d358c828d01611b51565b925050610100611d478c828d01611b51565b9150509295985092959850929598565b600060208284031215611d6d57611d6c612411565b5b6000611d7b84828501611b51565b91505092915050565b60008060408385031215611d9b57611d9a612411565b5b6000611da985828601611b3c565b9250506020611dba85828601611ae4565b9150509250929050565b60008060008060808587031215611dde57611ddd612411565b5b6000611dec87828801611b51565b9450506020611dfd87828801611af9565b935050604085015167ffffffffffffffff811115611e1e57611e1d61240c565b5b611e2a87828801611b0e565b9250506060611e3b87828801611b51565b91505092959194509250565b60008060408385031215611e5e57611e5d612411565b5b6000611e6c85828601611b51565b9250506020611e7d85828601611b51565b9150509250929050565b600080600060608486031215611ea057611e9f612411565b5b6000611eae86828701611b51565b9350506020611ebf86828701611b51565b9250506040611ed086828701611b51565b9150509250925092565b6000611ee68383611f0a565b60208301905092915050565b6000611efe8383611fe4565b60208301905092915050565b611f138161226a565b82525050565b611f228161226a565b82525050565b6000611f3382612159565b611f3d8185612189565b9350611f4883612139565b8060005b83811015611f79578151611f608882611eda565b9750611f6b8361216f565b925050600181019050611f4c565b5085935050505092915050565b6000611f9182612164565b611f9b818561219a565b9350611fa683612149565b8060005b83811015611fd7578151611fbe8882611ef2565b9750611fc98361217c565b925050600181019050611faa565b5085935050505092915050565b611fed8161229c565b82525050565b611ffc8161229c565b82525050565b60006020820190506120176000830184611f19565b92915050565b60006040820190506120326000830185611f19565b61203f6020830184611f19565b9392505050565b600060208201905081810360008301526120608184611f86565b905092915050565b600060408201905081810360008301526120828185611f86565b905081810360208301526120968184611f28565b90509392505050565b60006020820190506120b46000830184611ff3565b92915050565b60006040820190506120cf6000830185611ff3565b6120dc6020830184611f19565b9392505050565b60006120ed6120fe565b90506120f98282612315565b919050565b6000604051905090565b600067ffffffffffffffff821115612123576121226123d3565b5b61212c82612416565b9050602081019050919050565b6000819050602082019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b60006121b68261229c565b91506121c18361229c565b9250826121d1576121d0612375565b5b828204905092915050565b60006121e78261229c565b91506121f28361229c565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161561222b5761222a612346565b5b828202905092915050565b60006122418261229c565b915061224c8361229c565b92508282101561225f5761225e612346565b5b828203905092915050565b60006122758261227c565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600063ffffffff82169050919050565b600067ffffffffffffffff82169050919050565b60006bffffffffffffffffffffffff82169050919050565b60005b838110156123005780820151818401526020810190506122e5565b8381111561230f576000848401525b50505050565b61231e82612416565b810181811067ffffffffffffffff8211171561233d5761233c6123d3565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b6124308161226a565b811461243b57600080fd5b50565b6124478161229c565b811461245257600080fd5b50565b61245e816122a6565b811461246957600080fd5b50565b612475816122b6565b811461248057600080fd5b50565b61248c816122ca565b811461249757600080fd5b5056fea2646970667358221220d821b9e75624309c43dd0727fe175113210eccf5c80ce289ed5dab3c4d63356064736f6c63430008070033";

type LFWUtils_AvalancheConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LFWUtils_AvalancheConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LFWUtils_Avalanche__factory extends ContractFactory {
  constructor(...args: LFWUtils_AvalancheConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<LFWUtils_Avalanche> {
    return super.deploy(overrides || {}) as Promise<LFWUtils_Avalanche>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): LFWUtils_Avalanche {
    return super.attach(address) as LFWUtils_Avalanche;
  }
  override connect(signer: Signer): LFWUtils_Avalanche__factory {
    return super.connect(signer) as LFWUtils_Avalanche__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LFWUtils_AvalancheInterface {
    return new utils.Interface(_abi) as LFWUtils_AvalancheInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LFWUtils_Avalanche {
    return new Contract(address, _abi, signerOrProvider) as LFWUtils_Avalanche;
  }
}