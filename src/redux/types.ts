export interface RootState {
  page: Page;
}

export interface Action<Payload = null> {
  type: string;
  payload?: Payload;
}

export interface DefaultReducer<DataType> {
  loading: boolean;
  success: boolean;
  error: string;
  data: DataType;
}

export type PageName = "bill-categories" | "category-billers" | "products";
export interface Page {
  currentPage: PageName;
  prevPage: PageName | null;
  nextPage: PageName | null;
  header: string;
}

export interface BillCategory {
  categoryId: string;
  categoryName: string;
}

export interface Biller {
  billerId: string;
  billerName: string;
  categoryId: string;
  customerField1: string;
  moreOption: string;
  customerField2: string;
  customerField3: string;
  serviceLogo: string;
  id: string;
  updatedAt: string;
}

export interface Product {
  amount: string;
  isAmountFixed: string;
  paymentCode: string;
  paymentItemId: string;
  paymentItemName: string;
}
