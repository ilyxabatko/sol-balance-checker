import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { LAMPORTS_PER_SOL } from '@solana/web3.js';
import { FC, useEffect, useState } from 'react'
import dogesImg from "../doges.jpeg";

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