import React, { FC } from 'react';
import Wallet from "./components/Wallet-container";
import Balance from "./components/Balance";
import Header from "./components/Header";
require('./App.css');

// presentational component
const App: FC = () => {
    return (
        <Wallet>
            <Header>
                <Balance />
            </Header>
        </Wallet>
    );
};
export default App;
