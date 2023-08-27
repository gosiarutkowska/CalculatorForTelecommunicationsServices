import React from 'react';
import './TotalPrice.css';
interface Props {
    totalPrice: number | null;
}

const TotalPrice: React.FC<Props> = ({ totalPrice }) => (
    <div className="total-price-wrapper">
        {totalPrice !== null && <p>Całkowita cena za zaznaczone usługi: <span> {totalPrice} PLN</span></p>}
    </div>
);

export default TotalPrice;
