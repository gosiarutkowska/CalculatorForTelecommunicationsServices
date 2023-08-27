import React from 'react';
import { Service } from '../../types/commonTypes';

interface Props {
    services: Service[];
    selectedServices: string[];
    handleServiceChange: (service: string) => void;
}

const ServiceCheckboxes: React.FC<Props> = ({ services, selectedServices, handleServiceChange }) => (
    <>
        {services.map((service) => (
            <label key={service.name}>
                <input
                    type="checkbox"
                    checked={selectedServices.includes(service.name)}
                    onChange={() => handleServiceChange(service.name)}
                    disabled={
                        service.required ? !selectedServices.some((s) => service.required!.includes(s)) : false
                    }
                />
                {service.name}
            </label>
        ))}
    </>
);

export default ServiceCheckboxes;
