import React, { useState } from 'react';
import data from './mockData/data.json';

// Typy
interface Service {
  name: string;
  prices: Record<string, number>;
  dependencies?: string[];
  required?: string[];
}

interface Bundle {
  name: string;
  services: string[];
  prices: Record<string, number>;
  bonus?: string[];
}

interface Data {
  years: string[];
  services: Service[];
  bundles: Bundle[];
}

// Komponent
const App: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<string>(new Date().getFullYear().toString());
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [totalPrice, setTotalPrice] = useState<number | null>(null);
  const [bestBundle, setBestBundle] = useState<Bundle | null>(null);

  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(e.target.value);
  };

  const handleServiceChange = (service: string) => {
    setSelectedServices((prev) => {
      let newSelectedServices = [...prev];

      if (prev.includes(service)) {
        newSelectedServices = newSelectedServices.filter((s) => s !== service);

        const dependentServices = data.services.filter((s) => s.required?.includes(service));
        for (const dependentService of dependentServices) {
          newSelectedServices = newSelectedServices.filter((s) => s !== dependentService.name);
        }
      } else {
        newSelectedServices.push(service);
      }

      return newSelectedServices;
    });
  };

  const calculateTotal = () => {
    let sum = 0;
    let bestBundle: Bundle | null = null;

    for (const service of selectedServices) {
      const serviceObj = data.services.find((s) => s.name === service);
      if (serviceObj && serviceObj.prices.hasOwnProperty(selectedYear)) {
        sum += serviceObj.prices[selectedYear as keyof typeof serviceObj.prices];
      }
    }

    for (const bundle of data.bundles) {
      let isBundlePossible = true;
      for (const service of bundle.services) {
        if (!selectedServices.includes(service)) {
          isBundlePossible = false;
          break;
        }
      }
      if (isBundlePossible && bundle.prices.hasOwnProperty(selectedYear)) {
        const bundlePrice = bundle.prices[selectedYear as keyof typeof bundle.prices];
        const savings = sum - bundlePrice;
        if (savings > 0) {
          bestBundle = bundle;
        }
      }
    }

    setTotalPrice(sum);
    setBestBundle(bestBundle);
  };

  return (
      <div className="App">
        <h1>Service Calculator</h1>
        <label>
          Select Year:
          <select value={selectedYear} onChange={handleYearChange}>
            {data.years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
            ))}
          </select>
        </label>
        <h2>Select Services</h2>
        {data.services.map((service) => (
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
        <button onClick={calculateTotal}>Calculate</button>
        {totalPrice !== null && <h2>Total Price: {totalPrice} PLN</h2>}
        {bestBundle && (
            <div>
              <h2>Best Bundle:</h2>
              <p>Name: {bestBundle.name}</p>
              <p>Price: {bestBundle.prices[selectedYear as keyof typeof bestBundle.prices]} PLN</p>
              <p>Services: {bestBundle.services.join(', ')}</p>
              <p>Z pakietem '{bestBundle.name}' oszczędzasz {totalPrice! - bestBundle.prices[selectedYear as keyof typeof bestBundle.prices]} PLN</p>
            </div>
        )}
      </div>
  );
};

export default App;
