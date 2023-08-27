import React from 'react';
import { Bundle } from '../../types/commonTypes';

interface Props {
    bestBundle: Bundle | null;
    selectedYear: string;
    totalPrice: number | null;
}

const BestBundle: React.FC<Props> = ({ bestBundle, selectedYear, totalPrice }) => (
    <>
        {bestBundle && (
            <div>
                <h2>Najlepsza oferta dla Ciebie:</h2>
                <p>Nazwa pakietu: {bestBundle.name}</p>
                <p>Cena: {bestBundle.prices[selectedYear as keyof typeof bestBundle.prices]} PLN</p>
                <p>W pakiecie znajdziesz: {bestBundle.services.join(', ')}</p>
                <p>Z pakietem '{bestBundle.name}' oszczędzasz {totalPrice! - bestBundle.prices[selectedYear as keyof typeof bestBundle.prices]} PLN</p>
            </div>
        )}
    </>
);

export default BestBundle;
