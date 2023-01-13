import { ethers } from "ethers";

export function hideWalletAddress(walletAddress: string) {
    return (
      walletAddress.substring(0, 8) +
      "........" +
      walletAddress.substring(walletAddress.length - 5, walletAddress.length)
    );
}


export const  useGetProvider = async  () => {
    const provider: ethers.providers.Web3Provider =
    new ethers.providers.Web3Provider(window.ethereum);

  await window.ethereum.request({ method: "eth_requestAccounts" });
  const account = await provider.listAccounts();
 let accounts = account
  return {  provider, acc : accounts}
}

