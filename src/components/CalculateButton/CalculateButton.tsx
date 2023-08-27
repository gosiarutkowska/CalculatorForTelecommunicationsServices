import React from 'react';
import './CalculateButton.css';

interface Props {
    calculateTotal: () => void;
}

const CalculateButton: React.FC<Props> = ({ calculateTotal }) => (
    <button onClick={calculateTotal} className="calculate-button">Oblicz wartość usług</button>
);

export default CalculateButton;
