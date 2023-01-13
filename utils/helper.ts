export function hideWalletAddress(walletAddress: string) {
    return (
      walletAddress.substring(0, 8) +
      "........" +
      walletAddress.substring(walletAddress.length - 5, walletAddress.length)
    );
  }