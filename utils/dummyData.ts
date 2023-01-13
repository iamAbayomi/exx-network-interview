export const accountDetailsData ={
    name: "",
    symbol: "",
    balance: ""
  }


export  const USDT_ABI = [
"function balanceOf(address account) external view returns (uint256)",
"function totalSupply() external view returns (uint256)",
"function symbol() external view returns (string memory)",
"function name() external view returns (string memory)"
];