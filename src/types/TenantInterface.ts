import PropertyHistory from "./PropertyHistoryInterface";

interface Tenant {
  preferredName: string;
  fullname: string;
  gender: string;
  dob: Date; //TODO: convert to date
  phone: string;
  mobile: string;
  email: string;
  propertyHistory: Array<PropertyHistory>;
  employment: {
    title: string;
    type: string;
    netIncome: number;
    payPeriod: string;
    reference: {
      name: string;
      position: string;
      email: string;
      phone: string;
    };
  };
}

export default Tenant;
