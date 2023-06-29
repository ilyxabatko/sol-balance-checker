import { FC, ReactNode } from 'react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

const Header: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <div className="App-header">
            <div className="App-header-container">
                <h1 className="header-h1">Solana Balance Checker</h1>
                {children}
                <div className="button-container">
                    <WalletMultiButton />
                </div>
            </div>
        </div>
    )
}

export default Header;