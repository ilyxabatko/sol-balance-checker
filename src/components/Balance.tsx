import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { LAMPORTS_PER_SOL } from '@solana/web3.js';
import { FC, useEffect, useState } from 'react'

/* Component that fetches account data using a Pubkey that was connected via the adapter and displays the balance.
It will be re-rendered in case a connection (endpoint) or a pubkey (connected wallet) are changed*/
const Balance: FC = () => {
    const [balance, setBalance] = useState(0);
    const { connection } = useConnection();
    const { publicKey } = useWallet();

    useEffect(() => {
        if (!connection || !publicKey) { return }

        connection.getAccountInfo(publicKey).then(info => {
            (info && setBalance(info.lamports));
        })
    }, [connection, publicKey])

    return (
        <div className="balance-div">
            {publicKey ? <p className="balance-p">{`${(balance / LAMPORTS_PER_SOL).toFixed(3)}◎`}</p> : <div className="header-image-container"></div>}
        </div>
    )
}

export default Balance;