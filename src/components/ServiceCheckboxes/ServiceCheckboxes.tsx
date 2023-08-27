import React from 'react';
import { Service } from '../../types/commonTypes';
import './ServiceCheckboxes.css';

interface Props {
    services: Service[];
    selectedServices: string[];
    handleServiceChange: (service: string) => void;
}

const ServiceCheckboxes: React.FC<Props> = ({ services, selectedServices, handleServiceChange }) => (
    <div className="service-checkbox-wrapper">
        {services.map((service) => {
            const isDisabled = service.required ? !selectedServices.some((s) => service.required!.includes(s)) : false;
            const tooltip = isDisabled ? `Wymagana dodatkowa usługa: ${service.required!.join(', ')}` : '';
            return (
                <label key={service.name} title={tooltip}>
                    <input
                        type="checkbox"
                        checked={selectedServices.includes(service.name)}
                        onChange={() => handleServiceChange(service.name)}
                        disabled={isDisabled}
                    />
                    {service.name}
                </label>
            );
        })}
    </div>
);

export default ServiceCheckboxes;
