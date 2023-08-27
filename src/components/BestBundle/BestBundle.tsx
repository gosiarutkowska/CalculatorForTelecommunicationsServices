import React from 'react';
import { Bundle } from '../../types/commonTypes';
import './BestBundle.css';

interface BestBundleProps {
    bestBundle: Bundle | null;
    selectedYear: string;
    totalPrice: number | null;
}

const BestBundle: React.FC<BestBundleProps> = ({ bestBundle, selectedYear, totalPrice }) => {
    return (
        <div>
            {bestBundle && bestBundle.prices[selectedYear as keyof typeof bestBundle.prices] < totalPrice! ? (
                <div className="best-bundle-wrapper">
                    <h2>Znaleźliśmy dla Ciebie tańsze rozwiązanie</h2>
                    <p>Nazwa pakietu: <span className="package-name">{bestBundle.name}</span></p>
                    <p>Cena całkowita w pakiecie: <span className="package-price">{bestBundle.prices[selectedYear as keyof typeof bestBundle.prices]} PLN</span></p>
                    <p>W pakiecie znajdziesz:</p>
                    <ul className="services-list">
                        {bestBundle.services.map((service, index) => (
                            <li key={index + service}>{service}</li>
                        ))}
                    </ul>
                    {totalPrice! - bestBundle.prices[selectedYear as keyof typeof bestBundle.prices] > 0 && (
                        <p>
                            Z <span className="package-name">{bestBundle.name}</span> oszczędzasz{' '}
                            <span className="savings">
                                {totalPrice! - bestBundle.prices[selectedYear as keyof typeof bestBundle.prices]} PLN
                            </span>
                        </p>
                    )}
                </div>
            ) : null}
        </div>
    );
};

export default BestBundle;
