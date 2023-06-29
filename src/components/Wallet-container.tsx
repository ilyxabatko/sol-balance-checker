import { FC, ReactNode } from "react";
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react'
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import * as web3 from '@solana/web3.js'
import { PhantomWalletAdapter, BackpackWalletAdapter, SolflareWalletAdapter } from '@solana/wallet-adapter-wallets';
require('@solana/wallet-adapter-react-ui/styles.css')

/* The component is basically a container for the adapter implementation. 
Here you can pick a list of wallet that are supported by the app and an endpoint (even a custom RPC url)*/
const WalletContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const wallets = [
        new PhantomWalletAdapter(),
        new BackpackWalletAdapter(),
        new SolflareWalletAdapter(),
    ]

    const endpoint = web3.clusterApiUrl('devnet')

    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets}>
                <WalletModalProvider>
                    { children }
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    )
}

export default WalletContextProvider;