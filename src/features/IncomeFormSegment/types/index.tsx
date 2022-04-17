export interface Employment {
  title: string;
  company: string;
  type: string;
  amount: number;
  frequency: string;
  reference: {
    name: string;
    position: string;
    phone: string;
    email: string;
  };
}

export interface IncomeSupport {
  description: string;
  amount: number;
  frequency: string;
}

export interface RealEstateIncome {
  address: string;
  rent: number;
  frequency: string;
}

export interface IncomeFormState {
  employment: Array<Employment>;
  incomeSupport: Array<IncomeSupport>;
  realEstateIncome: Array<RealEstateIncome>;
}