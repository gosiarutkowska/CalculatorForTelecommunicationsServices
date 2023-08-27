export interface Service {
    name: string;
    prices: Record<string, number>;
    dependencies?: string[];
    required?: string[];
}

export interface Bundle {
    name: string;
    services: string[];
    prices: Record<string, number>;
    bonus?: string[];
}

export interface Data {
    years: string[];
    services: Service[];
    bundles: Bundle[];
}