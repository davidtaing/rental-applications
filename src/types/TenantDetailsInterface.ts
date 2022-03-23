interface TenantDetails {
  preferredName: string;
  fullname: string;
  gender: string;
  dob: Date; //TODO: convert to date
  phone: string;
  mobile: string;
  email: string;
  rentalHistory: {
    address: string;
    status: string;
    reference: {
      name: string;
      email: string;
      phone: string;
    };
  };
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

export default TenantDetails;
