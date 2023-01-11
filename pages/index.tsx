export default function Home() {
  return (
    <div className="pt-9 px-24">
      <div className="flex justify-between mb-32">
        <div>
          <p className="logo font-bold text-2xl">Logo here</p>
        </div>
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
          <button className="hash-button">
            <p className="hash-button-text font-bold">3FZbgi29.........V8eyH</p>
          </button>
        </div>
      </div>
      <div className="display-flex space-between">
        <div>
          <p className="text-7xl font-bold">Be an early bird</p>
          <p className="description">
            It would take months before official project launch, so you should
            buy only if you can wait for the launch to trade your coins.
          </p>
          <div>
            <div>
              <img />
              <p>Sale Pending</p>
            </div>
            <div>
              <img />
              <p>Sale Live</p>
            </div>
            <div>
              <img />
              <p>Sale Completed</p>
            </div>
            <div>
              <img />
              <p>Vesting Started</p>
            </div>
            <div>
              <img />
              <p>EXX Launched</p>
            </div>
          </div>
        </div>

        <div className="border-box">
          <button className="balance-button mb-2.5">
            <p className="text-sm font-bold">Your bal: 0.0000034 USDT</p>
          </button>
          <div className="payment-container px-5 py-5">
            <div className="display-flex">
              <div>
                <p>10:20:30</p>
              </div>
              <div>
                <p>Pending</p>
              </div>
            </div>
            <div>
              <p>Sale Progress</p>
              <div className="scroll-bar" />
            </div>
            <div>
              <p>Enter amount to buy</p>
              <div>
                <input />
                <button>Buy</button>
              </div>
            </div>
            <div>
              <div>
                <p>Min. Buy:</p>
                <p>30 USDT</p>
              </div>
              <div>
                <p>Max. Buy: </p>
                <p>10,000 USDT</p>
              </div>
            </div>
            <div>
              <p>Disclaimer:</p>
              <p className="text-xs">
                The information provided shall not in any way constitute a
                recommendation as to whether you should invest in any product
                discussed. We accept no liability for any loss.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer flex">
        <p>FAQ</p>
        <p>Exx Website</p>
        <p>Terms & Conditions</p>
        <p>Help</p>
      </div>
    </div>
  );
}
