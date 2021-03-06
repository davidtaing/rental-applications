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

export interface RentalIncome {
  address: string;
  rent: number;
  frequency: string;
}

export interface IncomeFormState {
  employment: Array<Employment>;
  incomeSupport: Array<IncomeSupport>;
  rentalIncome: Array<RentalIncome>;
}

export enum EmploymentType {
  FULL_TIME = "Full-Time",
  PART_TIME = "Part-Time",
  CASUAL = "Casual",
  SELF_EMPLOYED = "Self-Employed",
  CONTRACTOR = "Contractor",
}
