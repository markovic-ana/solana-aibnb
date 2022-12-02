import {
  WalletProvider,
  ConnectionProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";
import { useMemo } from "react";
require("@solana/wallet-adapter-react-ui/styles.css");

const connection =
  "https://fabled-newest-dinghy.solana-devnet.discover.quiknode.pro/b47e9eb74a0f662ca131c084a07a5e62e12f680d/";

const WalletConnectionProvider = ({ children }) => {
  const endpoint = useMemo(() => connection, []);
  const wallets = useMemo(() => [new PhantomWalletAdapter()], []);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider
        wallets={wallets}
        autoConnect
        onError={(e) => console.log(e)}
      >
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default WalletConnectionProvider;
