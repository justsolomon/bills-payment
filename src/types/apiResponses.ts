export interface APIResponse {
  responseCode: string;
  responseMessage: string;
}

export interface ValidateBillerResponse extends APIResponse {
  customers: Customer[];
  data: {
    user: User;
  };
}

export interface Customer {
  amount: string;
  amountType: string;
  amountTypeDescription: string;
  customerId: string;
  fullName: string;
  paymentCode: string;
}

export interface User {
  name: string;
  outstandingBalance: string;
}
