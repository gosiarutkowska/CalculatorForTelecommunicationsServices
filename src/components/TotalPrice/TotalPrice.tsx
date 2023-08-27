import React from 'react';

interface Props {
    totalPrice: number | null;
}

const TotalPrice: React.FC<Props> = ({ totalPrice }) => (
    <>
        {totalPrice !== null && <h2>Całkowita cena za zaznaczone usługi: {totalPrice} PLN</h2>}
    </>
);

export default TotalPrice;
