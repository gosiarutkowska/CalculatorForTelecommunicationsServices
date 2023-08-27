import React from 'react';

interface Props {
    calculateTotal: () => void;
}

const CalculateButton: React.FC<Props> = ({ calculateTotal }) => (
    <button onClick={calculateTotal}>Calculate</button>
);

export default CalculateButton;
