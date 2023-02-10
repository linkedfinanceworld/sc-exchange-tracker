/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  LFWUtils_Polygon,
  LFWUtils_PolygonInterface,
} from "../../../contracts/LFWUtils_Polygon.sol/LFWUtils_Polygon";

const _abi = [
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
    name: "getApeSwapFarmingInfo",
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
        name: "_userAddress",
        type: "address",
      },
    ],
    name: "getGNSFarmingPool",
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
    name: "getGNSStakingPool",
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
    name: "getQuickSwapDualLPFarmingInfo",
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
    name: "getQuickSwapLPFarmingInfo",
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
    name: "getQuickSwapStakingInfo",
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
    name: "getSandboxStakingInfo",
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
    name: "getSushiFarmingInfo",
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
];

const _bytecode =
  "0x608060405260056000556002600155600360025573f28164a485b0b2c90639e47b0f377b4a438a16b1600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550735d47baba0d66083c52009271faf3f50dcc01023c600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550730b3f868e0be5597d5db7feb59e1cadbb0fdda50a600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555073bbba073c31bf03b8acf7c28ef0738decf3695683600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555073e5417af564e4bfda1c483642db72007871397896600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507354aff400858dcac39797a81894d9920f16972d1d600860006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550730769fd68dfb93167989c6f7254cd0d766fb2841f600960006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555073151757c2e830c467b28fe6c09c3174b6c76aa0c5600a60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555073fb06a737f549eb2512eb6082a808fc7f16c0819d600b60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555073d7052ec0fe1fe25b20b7d65f6f3d490fce58804f600c60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061a8c0600d5561016d600e556301e13380600f556201518060105534801561038c57600080fd5b50612e038061039c6000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c80639c3f3bc91161005b5780639c3f3bc914610150578063de50571714610181578063e36fd73c146101b1578063e485332d146101e257610088565b806314a94dc01461008d5780631cba7331146100be5780633e31c4a6146100ef5780637096f4bc1461011f575b600080fd5b6100a760048036038101906100a2919061273d565b610212565b6040516100b5929190612a7f565b60405180910390f35b6100d860048036038101906100d391906126d0565b6106d1565b6040516100e6929190612a7f565b60405180910390f35b610109600480360381019061010491906126d0565b610b5e565b6040516101169190612a5d565b60405180910390f35b610139600480360381019061013491906126d0565b610f08565b604051610147929190612a7f565b60405180910390f35b61016a6004803603810190610165919061273d565b611564565b604051610178929190612a7f565b60405180910390f35b61019b600480360381019061019691906126d0565b611a23565b6040516101a89190612a5d565b60405180910390f35b6101cb60048036038101906101c69190612676565b611dcf565b6040516101d9929190612a7f565b60405180910390f35b6101fc60048036038101906101f791906126d0565b6122e0565b6040516102099190612a5d565b60405180910390f35b60608060015467ffffffffffffffff81111561023157610230612d54565b5b60405190808252806020026020018201604052801561025f5781602001602082028036833780820191505090505b50915060025467ffffffffffffffff81111561027e5761027d612d54565b5b6040519080825280602002602001820160405280156102ac5781602001602082028036833780820191505090505b5090506000600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508073ffffffffffffffffffffffffffffffffffffffff1663aa8f6ca186866040518363ffffffff1660e01b8152600401610311929190612ad1565b60206040518083038186803b15801561032957600080fd5b505afa15801561033d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103619190612710565b8360008151811061037557610374612d25565b5b6020026020010181815250508073ffffffffffffffffffffffffffffffffffffffff166393f1a40b86866040518363ffffffff1660e01b81526004016103bc929190612ad1565b604080518083038186803b1580156103d357600080fd5b505afa1580156103e7573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061040b919061277d565b50836001815181106104205761041f612d25565b5b60200260200101818152505060008173ffffffffffffffffffffffffffffffffffffffff166378ed5d1f876040518263ffffffff1660e01b81526004016104679190612ab6565b60206040518083038186803b15801561047f57600080fd5b505afa158015610493573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104b791906126a3565b905060008190508073ffffffffffffffffffffffffffffffffffffffff16630dfe16816040518163ffffffff1660e01b815260040160206040518083038186803b15801561050457600080fd5b505afa158015610518573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061053c91906126a3565b846000815181106105505761054f612d25565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250508073ffffffffffffffffffffffffffffffffffffffff1663d21220a76040518163ffffffff1660e01b815260040160206040518083038186803b1580156105d057600080fd5b505afa1580156105e4573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061060891906126a3565b8460018151811061061c5761061b612d25565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff1681525050600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168460028151811061068d5761068c612d25565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250505050509250929050565b60608060015467ffffffffffffffff8111156106f0576106ef612d54565b5b60405190808252806020026020018201604052801561071e5781602001602082028036833780820191505090505b50915060025467ffffffffffffffff81111561073d5761073c612d54565b5b60405190808252806020026020018201604052801561076b5781602001602082028036833780820191505090505b50905060008490508073ffffffffffffffffffffffffffffffffffffffff16628cc262856040518263ffffffff1660e01b81526004016107ab9190612a42565b60206040518083038186803b1580156107c357600080fd5b505afa1580156107d7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107fb9190612710565b8360008151811061080f5761080e612d25565b5b6020026020010181815250508073ffffffffffffffffffffffffffffffffffffffff166370a08231856040518263ffffffff1660e01b81526004016108549190612a42565b60206040518083038186803b15801561086c57600080fd5b505afa158015610880573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108a49190612710565b836001815181106108b8576108b7612d25565b5b60200260200101818152505060008173ffffffffffffffffffffffffffffffffffffffff166372f702f36040518163ffffffff1660e01b815260040160206040518083038186803b15801561090c57600080fd5b505afa158015610920573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061094491906126a3565b905060008190508073ffffffffffffffffffffffffffffffffffffffff16630dfe16816040518163ffffffff1660e01b815260040160206040518083038186803b15801561099157600080fd5b505afa1580156109a5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109c991906126a3565b846000815181106109dd576109dc612d25565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250508073ffffffffffffffffffffffffffffffffffffffff1663d21220a76040518163ffffffff1660e01b815260040160206040518083038186803b158015610a5d57600080fd5b505afa158015610a71573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a9591906126a3565b84600181518110610aa957610aa8612d25565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff1681525050600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1684600281518110610b1a57610b19612d25565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250505050509250929050565b606060005467ffffffffffffffff811115610b7c57610b7b612d54565b5b604051908082528060200260200182016040528015610baa5781602001602082028036833780820191505090505b50905060008390508073ffffffffffffffffffffffffffffffffffffffff16628cc262846040518263ffffffff1660e01b8152600401610bea9190612a42565b60206040518083038186803b158015610c0257600080fd5b505afa158015610c16573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c3a9190612710565b82600081518110610c4e57610c4d612d25565b5b6020026020010181815250508073ffffffffffffffffffffffffffffffffffffffff166370a08231846040518263ffffffff1660e01b8152600401610c939190612a42565b60206040518083038186803b158015610cab57600080fd5b505afa158015610cbf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ce39190612710565b82600181518110610cf757610cf6612d25565b5b60200260200101818152505060006010548273ffffffffffffffffffffffffffffffffffffffff16637b0a47ee6040518163ffffffff1660e01b815260040160206040518083038186803b158015610d4e57600080fd5b505afa158015610d62573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d869190612710565b610d909190612bf3565b905060008273ffffffffffffffffffffffffffffffffffffffff166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b158015610dda57600080fd5b505afa158015610dee573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e129190612710565b90508184600281518110610e2957610e28612d25565b5b6020026020010181815250508084600381518110610e4a57610e49612d25565b5b602002602001018181525050428373ffffffffffffffffffffffffffffffffffffffff1663ebe2b12b6040518163ffffffff1660e01b815260040160206040518083038186803b158015610e9d57600080fd5b505afa158015610eb1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ed59190612710565b610edf9190612c4d565b84600481518110610ef357610ef2612d25565b5b60200260200101818152505050505092915050565b606080600367ffffffffffffffff811115610f2657610f25612d54565b5b604051908082528060200260200182016040528015610f545781602001602082028036833780820191505090505b509150600467ffffffffffffffff811115610f7257610f71612d54565b5b604051908082528060200260200182016040528015610fa05781602001602082028036833780820191505090505b50905060008490508073ffffffffffffffffffffffffffffffffffffffff16631820d739856040518263ffffffff1660e01b8152600401610fe19190612a42565b60206040518083038186803b158015610ff957600080fd5b505afa15801561100d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110319190612710565b8360008151811061104557611044612d25565b5b6020026020010181815250508073ffffffffffffffffffffffffffffffffffffffff166360fb3626856040518263ffffffff1660e01b815260040161108a9190612a42565b60206040518083038186803b1580156110a257600080fd5b505afa1580156110b6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110da9190612710565b836001815181106110ee576110ed612d25565b5b6020026020010181815250508073ffffffffffffffffffffffffffffffffffffffff166370a08231856040518263ffffffff1660e01b81526004016111339190612a42565b60206040518083038186803b15801561114b57600080fd5b505afa15801561115f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111839190612710565b8360028151811061119757611196612d25565b5b60200260200101818152505060008173ffffffffffffffffffffffffffffffffffffffff166372f702f36040518163ffffffff1660e01b815260040160206040518083038186803b1580156111eb57600080fd5b505afa1580156111ff573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061122391906126a3565b905060008190508073ffffffffffffffffffffffffffffffffffffffff16630dfe16816040518163ffffffff1660e01b815260040160206040518083038186803b15801561127057600080fd5b505afa158015611284573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112a891906126a3565b846000815181106112bc576112bb612d25565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250508073ffffffffffffffffffffffffffffffffffffffff1663d21220a76040518163ffffffff1660e01b815260040160206040518083038186803b15801561133c57600080fd5b505afa158015611350573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061137491906126a3565b8460018151811061138857611387612d25565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250508273ffffffffffffffffffffffffffffffffffffffff16635fd1020c6040518163ffffffff1660e01b815260040160206040518083038186803b15801561140857600080fd5b505afa15801561141c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061144091906126a3565b8460028151811061145457611453612d25565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250508273ffffffffffffffffffffffffffffffffffffffff166388c4c6666040518163ffffffff1660e01b815260040160206040518083038186803b1580156114d457600080fd5b505afa1580156114e8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061150c91906126a3565b846003815181106115205761151f612d25565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250505050509250929050565b60608060015467ffffffffffffffff81111561158357611582612d54565b5b6040519080825280602002602001820160405280156115b15781602001602082028036833780820191505090505b50915060025467ffffffffffffffff8111156115d0576115cf612d54565b5b6040519080825280602002602001820160405280156115fe5781602001602082028036833780820191505090505b5090506000600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508073ffffffffffffffffffffffffffffffffffffffff1663195426ec86866040518363ffffffff1660e01b8152600401611663929190612ad1565b60206040518083038186803b15801561167b57600080fd5b505afa15801561168f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116b39190612710565b836000815181106116c7576116c6612d25565b5b6020026020010181815250508073ffffffffffffffffffffffffffffffffffffffff166393f1a40b86866040518363ffffffff1660e01b815260040161170e929190612ad1565b604080518083038186803b15801561172557600080fd5b505afa158015611739573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061175d91906127bd565b508360018151811061177257611771612d25565b5b60200260200101818152505060008173ffffffffffffffffffffffffffffffffffffffff166378ed5d1f876040518263ffffffff1660e01b81526004016117b99190612ab6565b60206040518083038186803b1580156117d157600080fd5b505afa1580156117e5573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061180991906126a3565b905060008190508073ffffffffffffffffffffffffffffffffffffffff16630dfe16816040518163ffffffff1660e01b815260040160206040518083038186803b15801561185657600080fd5b505afa15801561186a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061188e91906126a3565b846000815181106118a2576118a1612d25565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250508073ffffffffffffffffffffffffffffffffffffffff1663d21220a76040518163ffffffff1660e01b815260040160206040518083038186803b15801561192257600080fd5b505afa158015611936573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061195a91906126a3565b8460018151811061196e5761196d612d25565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff1681525050600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16846002815181106119df576119de612d25565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250505050509250929050565b606060005467ffffffffffffffff811115611a4157611a40612d54565b5b604051908082528060200260200182016040528015611a6f5781602001602082028036833780820191505090505b50905060008390508073ffffffffffffffffffffffffffffffffffffffff16628cc262846040518263ffffffff1660e01b8152600401611aaf9190612a42565b60206040518083038186803b158015611ac757600080fd5b505afa158015611adb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611aff9190612710565b82600081518110611b1357611b12612d25565b5b6020026020010181815250508073ffffffffffffffffffffffffffffffffffffffff166370a08231846040518263ffffffff1660e01b8152600401611b589190612a42565b60206040518083038186803b158015611b7057600080fd5b505afa158015611b84573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ba89190612710565b82600181518110611bbc57611bbb612d25565b5b60200260200101818152505060008173ffffffffffffffffffffffffffffffffffffffff166396769e896040518163ffffffff1660e01b815260040160206040518083038186803b158015611c1057600080fd5b505afa158015611c24573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c4891906126a3565b9050600081905060006010548273ffffffffffffffffffffffffffffffffffffffff1663679aefce6040518163ffffffff1660e01b815260040160206040518083038186803b158015611c9a57600080fd5b505afa158015611cae573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611cd29190612710565b611cdc9190612bf3565b905060008473ffffffffffffffffffffffffffffffffffffffff166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b158015611d2657600080fd5b505afa158015611d3a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d5e9190612710565b90508186600281518110611d7557611d74612d25565b5b6020026020010181815250508086600381518110611d9657611d95612d25565b5b602002602001018181525050600086600481518110611db857611db7612d25565b5b602002602001018181525050505050505092915050565b60608060015467ffffffffffffffff811115611dee57611ded612d54565b5b604051908082528060200260200182016040528015611e1c5781602001602082028036833780820191505090505b50915060025467ffffffffffffffff811115611e3b57611e3a612d54565b5b604051908082528060200260200182016040528015611e695781602001602082028036833780820191505090505b5090506000600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905060008060008373ffffffffffffffffffffffffffffffffffffffff16635458d0fe6040518163ffffffff1660e01b815260040160206040518083038186803b158015611ede57600080fd5b505afa158015611ef2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f169190612710565b90508373ffffffffffffffffffffffffffffffffffffffff1663a87430ba886040518263ffffffff1660e01b8152600401611f519190612a42565b60e06040518083038186803b158015611f6957600080fd5b505afa158015611f7d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611fa19190612878565b90919293509091925090505088600181518110611fc157611fc0612d25565b5b602002602001018195508296508381525050505082670de0b6b3a7640000828489600181518110611ff557611ff4612d25565b5b60200260200101516120079190612b6c565b6120119190612bf3565b61201b9190612bc2565b6120259190612c4d565b8660008151811061203957612038612d25565b5b60200260200101818152505060008473ffffffffffffffffffffffffffffffffffffffff1663313c06a06040518163ffffffff1660e01b815260040160206040518083038186803b15801561208d57600080fd5b505afa1580156120a1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906120c591906126a3565b905060008190508073ffffffffffffffffffffffffffffffffffffffff16630dfe16816040518163ffffffff1660e01b815260040160206040518083038186803b15801561211257600080fd5b505afa158015612126573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061214a91906126a3565b8760008151811061215e5761215d612d25565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250508073ffffffffffffffffffffffffffffffffffffffff1663d21220a76040518163ffffffff1660e01b815260040160206040518083038186803b1580156121de57600080fd5b505afa1580156121f2573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061221691906126a3565b8760018151811061222a57612229612d25565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff1681525050600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168760028151811061229b5761229a612d25565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff1681525050505050505050915091565b6060600267ffffffffffffffff8111156122fd576122fc612d54565b5b60405190808252806020026020018201604052801561232b5781602001602082028036833780820191505090505b509050600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156124615760008390508073ffffffffffffffffffffffffffffffffffffffff1663a87430ba846040518263ffffffff1660e01b81526004016123c29190612a42565b60a06040518083038186803b1580156123da57600080fd5b505afa1580156123ee573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061241291906127fd565b9091925090915090508360018151811061242f5761242e612d25565b5b602002602001018460008151811061244a57612449612d25565b5b602002602001018281525082815250505050612607565b60008390506000808273ffffffffffffffffffffffffffffffffffffffff166379c160366040518163ffffffff1660e01b815260040160206040518083038186803b1580156124af57600080fd5b505afa1580156124c3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906124e79190612710565b90508273ffffffffffffffffffffffffffffffffffffffff1663a87430ba866040518263ffffffff1660e01b81526004016125229190612a42565b60a06040518083038186803b15801561253a57600080fd5b505afa15801561254e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061257291906127fd565b90919250909150508560018151811061258e5761258d612d25565b5b6020026020010181945082815250505081670de0b6b3a764000082866001815181106125bd576125bc612d25565b5b60200260200101516125cf9190612bf3565b6125d99190612bc2565b6125e39190612c4d565b846000815181106125f7576125f6612d25565b5b6020026020010181815250505050505b92915050565b60008135905061261c81612d88565b92915050565b60008151905061263181612d88565b92915050565b60008151905061264681612d9f565b92915050565b60008135905061265b81612db6565b92915050565b60008151905061267081612db6565b92915050565b60006020828403121561268c5761268b612d83565b5b600061269a8482850161260d565b91505092915050565b6000602082840312156126b9576126b8612d83565b5b60006126c784828501612622565b91505092915050565b600080604083850312156126e7576126e6612d83565b5b60006126f58582860161260d565b92505060206127068582860161260d565b9150509250929050565b60006020828403121561272657612725612d83565b5b600061273484828501612661565b91505092915050565b6000806040838503121561275457612753612d83565b5b60006127628582860161264c565b92505060206127738582860161260d565b9150509250929050565b6000806040838503121561279457612793612d83565b5b60006127a285828601612661565b92505060206127b385828601612637565b9150509250929050565b600080604083850312156127d4576127d3612d83565b5b60006127e285828601612661565b92505060206127f385828601612661565b9150509250929050565b600080600080600060a0868803121561281957612818612d83565b5b600061282788828901612661565b955050602061283888828901612661565b945050604061284988828901612661565b935050606061285a88828901612661565b925050608061286b88828901612661565b9150509295509295909350565b600080600080600080600060e0888a03121561289757612896612d83565b5b60006128a58a828b01612661565b97505060206128b68a828b01612661565b96505060406128c78a828b01612661565b95505060606128d88a828b01612661565b94505060806128e98a828b01612661565b93505060a06128fa8a828b01612622565b92505060c061290b8a828b01612661565b91505092959891949750929550565b6000612926838361294a565b60208301905092915050565b600061293e8383612a24565b60208301905092915050565b61295381612c81565b82525050565b61296281612c81565b82525050565b600061297382612b1a565b61297d8185612b4a565b935061298883612afa565b8060005b838110156129b95781516129a0888261291a565b97506129ab83612b30565b92505060018101905061298c565b5085935050505092915050565b60006129d182612b25565b6129db8185612b5b565b93506129e683612b0a565b8060005b83811015612a175781516129fe8882612932565b9750612a0983612b3d565b9250506001810190506129ea565b5085935050505092915050565b612a2d81612cbd565b82525050565b612a3c81612cbd565b82525050565b6000602082019050612a576000830184612959565b92915050565b60006020820190508181036000830152612a7781846129c6565b905092915050565b60006040820190508181036000830152612a9981856129c6565b90508181036020830152612aad8184612968565b90509392505050565b6000602082019050612acb6000830184612a33565b92915050565b6000604082019050612ae66000830185612a33565b612af36020830184612959565b9392505050565b6000819050602082019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b6000612b7782612cbd565b9150612b8283612cbd565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115612bb757612bb6612cc7565b5b828201905092915050565b6000612bcd82612cbd565b9150612bd883612cbd565b925082612be857612be7612cf6565b5b828204905092915050565b6000612bfe82612cbd565b9150612c0983612cbd565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615612c4257612c41612cc7565b5b828202905092915050565b6000612c5882612cbd565b9150612c6383612cbd565b925082821015612c7657612c75612cc7565b5b828203905092915050565b6000612c8c82612c9d565b9050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b612d9181612c81565b8114612d9c57600080fd5b50565b612da881612c93565b8114612db357600080fd5b50565b612dbf81612cbd565b8114612dca57600080fd5b5056fea2646970667358221220748c3b0a76ae31d75e71a8eaedbac567f3807d2afed1bdbd41bb71a15a90000164736f6c63430008070033";

type LFWUtils_PolygonConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LFWUtils_PolygonConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LFWUtils_Polygon__factory extends ContractFactory {
  constructor(...args: LFWUtils_PolygonConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<LFWUtils_Polygon> {
    return super.deploy(overrides || {}) as Promise<LFWUtils_Polygon>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): LFWUtils_Polygon {
    return super.attach(address) as LFWUtils_Polygon;
  }
  override connect(signer: Signer): LFWUtils_Polygon__factory {
    return super.connect(signer) as LFWUtils_Polygon__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LFWUtils_PolygonInterface {
    return new utils.Interface(_abi) as LFWUtils_PolygonInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LFWUtils_Polygon {
    return new Contract(address, _abi, signerOrProvider) as LFWUtils_Polygon;
  }
}