import React, { FC } from 'react';
import Wallet from "./components/Wallet-container";
import Balance from "./components/Balance";
import BalanceWindow from './components/BalanceWindow';
require('./App.css');

// presentational component
const App: FC = () => {
    return (
        <Wallet>
            <BalanceWindow>
                <Balance />
            </BalanceWindow>
        </Wallet>
    );
};
export default App;
