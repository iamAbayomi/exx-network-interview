import { useEffect, useState } from "react";
import { ethers, Contract, BigNumber } from "ethers";
import { hideWalletAddress, useGetProvider } from "../utils/helper";
import { IAccountDetails } from "../types";
import { accountDetailsData, USDT_ABI } from "../utils/dummyData";
import { toast } from "react-toast";

export default function Home() {
  const [isWalletAddress, setIsWalletAddress] = useState<boolean>(false);
  const [account, setAccount] = useState<string>("");
  const [accountDetails, setAccountDetails] =
    useState<IAccountDetails>(accountDetailsData);
  const [amountToBuy, setAmountToBuy] = useState<string>("");

  useEffect(() => {
    if (account.length > 2) {
      console.log("account in useEffect ", account);
      getUSDTBalance(account);
    }
  }, [account]);

  function toggleWalletAddress() {
    setIsWalletAddress(!isWalletAddress);
  }

  function onAmountToBuyChanged(event: { target: { value: string } }) {
    console.log("value ", event.target.value);
    setAmountToBuy(event.target.value);
  }

  async function getUSDTBalance(address: string) {
    const provider = new ethers.providers.JsonRpcProvider(
      "https://data-seed-prebsc-1-s1.binance.org:8545/"
    );
    const USDT = new Contract(
      "0x337610d27c682e347c9cd60bd4b3b107c9d34ddd",
      USDT_ABI,
      provider
    );
    const balance = await USDT.balanceOf(address);
    const totalSupply = await USDT.totalSupply();
    const name = await USDT.name();
    const symbol = await USDT.symbol();

    console.log(name, symbol, balance.toString(), totalSupply.toString());

    setAccountDetails({
      name,
      symbol,
      balance: balance.toString()
    });
  }

  async function buy(value: string) {
    const abi = ["function buy() public payable"];
    const provider: ethers.providers.Web3Provider =
      new ethers.providers.Web3Provider(window.ethereum);

    await window.ethereum.request({ method: "eth_requestAccounts" });

    const signer = provider.getSigner();
    const Contract = new ethers.Contract(
      "0xDA497727316FBDD71D2b555041035c6641c0D85F",
      abi,
      signer
    );

    try {
      const tx = await Contract.buy({
        value: ethers.utils.parseEther(value),
        gasLimit: "34438"
      });

      const response = await tx.wait();

      console.log(response);
    } catch (err) {
      toast.error("Transaction rejected");
    }
  }

  async function connectWallet() {
    if (window.ethereum === undefined) {
      toast.error("MetaMeask is not installed. Please install MetaMask");
      return;
    }
    const provider: ethers.providers.Web3Provider =
      new ethers.providers.Web3Provider(window.ethereum);
    await window.ethereum.request({ method: "eth_requestAccounts" });
    const accounts = await provider.listAccounts();

    if (accounts) {
      setAccount(accounts[0]);
      toggleWalletAddress();
    }
  }

  return (
    <div className="pt-9 px-24">
      <div className="flex justify-between mb-32">
        <div>
          <p className="logo font-bold text-2xl">Logo here</p>
        </div>
        <div className="max-[1280px]:hidden">
          {isWalletAddress ? (
            <div className="flex items-center text-sm">
              <button className="flex mr-10">
                <img src="download-icon.svg" />
                <p className="ml-2.5 font-bold text-sm">Download Tokenomics</p>
              </button>
              <button className="flex mr-3 bsc-button items-center">
                <img src="bsc-icon.svg" />
                <p className="text-sm ml-2.5 font-bold bsc-button-text">
                  BSC Mainnet
                </p>
              </button>
              <button className="hash-button" onClick={toggleWalletAddress}>
                <p className="hash-button-text font-bold">
                  {hideWalletAddress(account)}
                </p>
              </button>
            </div>
          ) : (
            <button
              className="flex gap-[10px] bg-[#174AFF] items-center py-[18px] px-[28px] rounded-[10px]"
              onClick={connectWallet}
            >
              <p className="text-white">Connect Wallet</p>
              <img src="./up-arrow.svg" />
            </button>
          )}
        </div>
        <div className="xl:hidden flex gap-[14px]">
          <img src="./archive-icon.svg" />
          <img src="./menu-icon.svg" />
        </div>
      </div>
      <div className="display-flex space-between max-[1280px]:flex-col">
        <div>
          <p className="text-7xl font-bold">Be an early bird</p>
          <p className="max-w-[656px] mb-[35px] mt-2.5 text-lg description">
            It would take months before official project launch, so you should
            buy only if you can wait for the launch to trade your coins.
          </p>
          <div className="font-bold text-lg max-[1280px]:hidden">
            <div>
              <div className="flex items-center gap-[35px]">
                <div className="w-[20px] h-[20px] rounded-[14.5px] bg-[#174AFF]" />
                <p>Sale Pending</p>
              </div>
              <div className="h-[48px] w-[2px] my-[-5px] ml-[8px] straight-line" />
            </div>
            <div>
              <div className="flex items-center gap-[35px]">
                <div className="w-[20px] h-[20px] rounded-[14.5px] bg-[#174AFF]" />
                <p>Sale Live</p>
              </div>
              <div className="h-[48px] w-[2px] my-[-5px] ml-[8px] straight-line" />
            </div>
            <div>
              <div className="flex items-center gap-[35px]">
                <div className="w-[20px] h-[20px] rounded-[14.5px] bg-[#174AFF]" />
                <p>Sale Completed</p>
              </div>
              <div className="h-[48px] w-[2px] my-[-5px] ml-[8px] straight-line" />
            </div>
            <div>
              <div className="flex items-center gap-[35px]">
                <div className="w-[20px] h-[20px] rounded-[14.5px] bg-[#174AFF]" />
                <p>Vesting Started</p>
              </div>
              <div className="h-[48px] w-[2px] my-[-5px] ml-[8px] straight-line" />
            </div>
            <div>
              <div className="flex items-center gap-[35px]">
                <div className="w-[20px] h-[20px] rounded-[14.5px] bg-[#174AFF]" />
                <p>EXX Launched</p>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          {accountDetails.name.length > 2 ? (
            <button className="balance-button mb-2.5 max-[1280px]:hidden">
              <p className="text-sm font-bold">
                Your bal:{" "}
                {accountDetails?.balance + " " + accountDetails?.symbol}
              </p>
            </button>
          ) : (
            <></>
          )}

          <div className="payment-container max-w-lg px-5 py-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-bold text-2xl">10:20:30</p>
              </div>
              <div className="badge">
                <p className="text-sm">Pending</p>
              </div>
            </div>
            <div className="mt-[43px]">
              <p className="text-sm sale-progress-text">Sale Progress</p>
              <div className="scroll-bar" />
            </div>
            <div className="mt-10 mb-2.5">
              <p className="font-bold">Enter amount to buy</p>
              <div className="flex gap-2.5 w-full h-full sm:items-center mt-2.5 flex-col sm:flex-row">
                <div className="flex justify-between w-full h-full px-[18px] pl-[20px] pr-2px input-container">
                  <input
                    value={amountToBuy}
                    onChange={onAmountToBuyChanged}
                    className="hover:border-white"
                    placeholder="00.00 USDT"
                  />
                  <div className="max-[680px]:hidden">
                    <div />
                    <p color="#111315">00.00 EXX</p>
                  </div>
                </div>
                <button
                  className="buy-btn rounded-[10px] dm-sans text-sm"
                  onClick={() => buy(amountToBuy)}
                >
                  Buy
                </button>
              </div>
            </div>
            <div className="price-container flex text-sm">
              <div className="flex text-sm gap-1">
                <p className="font-extralight">Min. Buy:</p>
                <p className="font-bold">30 USDT</p>
              </div>
              <div className="flex ml-[17px] text-sm gap-1">
                <p>Max. Buy: </p>
                <p className="font-bold">10,000 USDT</p>
              </div>
            </div>
            <div className="mt-10 dm-sans">
              <p>Disclaimer:</p>
              <p className="mt-2.5 disclaimer-description text-xs">
                The information provided shall not in any way constitute a
                recommendation as to whether you should invest in any product
                discussed.{" "}
                <span className="font-bold">
                  We accept no liability for any loss.{" "}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer m-auto mt-[82px] mb-[30px] flex gap-[40px] max-w-max  font-medium text-[#A0A5BA] left-[35%]">
        <p>FAQ</p>
        <p>Exx Website</p>
        <p>Terms & Conditions</p>
        <p>Help</p>
      </div>
    </div>
  );
}
