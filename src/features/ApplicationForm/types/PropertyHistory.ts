/**
 * Represents Property History,
 * i.e. Rental History and other situations such as "living with parents".
 */
interface PropertyHistory {
  address: string;
  status: string;
  reference: {
    name: string;
    email: string;
    phone: string;
  };
}

export default PropertyHistory;
