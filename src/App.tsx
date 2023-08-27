import React, { useState } from 'react';
import data from './mockData/data.json';
import SelectYear from './components/SelectYear/SelectYear';
import ServiceCheckboxes from './components/ServiceCheckboxes/ServiceCheckboxes';
import CalculateButton from './components/CalculateButton/CalculateButton';
import TotalPrice from './components/TotalPrice/TotalPrice';
import BestBundle from './components/BestBundle/BestBundle';
import { Bundle } from './types/commonTypes';
import './App.css';

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

  const findServicePrice = (serviceName: string, year: string) => {
    const service = data.services.find((s) => s.name === serviceName);
    return service?.prices[year as keyof typeof service.prices] ?? 0;
  };

  const isSubsetOfBundle = (selectedServices: string[], bundle: Bundle) => {
    return selectedServices.every(service => bundle.services.includes(service));
  };

  const calculateServiceSum = (selectedServices: string[], year: string) => {
    return selectedServices.reduce((sum, service) => sum + findServicePrice(service, year), 0);
  };

  const findBestBundle = (selectedServices: string[], year: string) => {
    let bestBundle: Bundle | null = null;
    let bestSavings = 0;

    for (const bundle of data.bundles) {
      if (isSubsetOfBundle(selectedServices, bundle)) {
        const totalBundlePrice = calculateServiceSum(selectedServices, year);
        const bundlePrice = bundle.prices[year as keyof typeof bundle.prices] ?? 0;
        const savings = totalBundlePrice - bundlePrice;

        if (savings > bestSavings) {
          bestSavings = savings;
          bestBundle = bundle;
        }
      }
    }

    return bestBundle;
  };
  const calculateTotal = () => {
    const sum = calculateServiceSum(selectedServices, selectedYear);
    const bestBundle = findBestBundle(selectedServices, selectedYear);

    setTotalPrice(sum);
    setBestBundle(bestBundle);
  };


  return (
      <div className="App">
        <div className="main-content">
          <h1>Kalkulator usług telekomunikacyjnych</h1>
          <SelectYear
              selectedYear={selectedYear}
              handleYearChange={handleYearChange}
              years={data.years}
          />
          <div className="services-wrapper">
            <h4>Wybierz usługi, którymi się interesujesz</h4>
            <ServiceCheckboxes
                services={data.services}
                selectedServices={selectedServices}
                handleServiceChange={handleServiceChange}
            />
          </div>
          <div className="button-wrapper">
            <CalculateButton calculateTotal={calculateTotal} />
          </div>
        </div>
        <TotalPrice totalPrice={totalPrice} />
        <BestBundle
            bestBundle={bestBundle}
            selectedYear={selectedYear}
            totalPrice={totalPrice}
        />
      </div>
  );
};

export default App;
