export interface CategoryTypes {
  _id: string;
  name: string;
  _v: number;
}

export interface GameItemTypes {
  _id: string;
  status: string;
  name: string;
  thumbnail: string;
  category: CategoryTypes;
}

export interface NominalTypes {
  _id: string;
  coinQuantity: number;
  coinName: string;
  price: number;
}

export interface BankTypes {
  _id: string;
  name: string;
  bankName: string;
  noRekening: string;
}

export interface PaymentTypes {
  _id: string;
  type: string;
  status: string;
  banks: BankTypes[];
}

export interface SignInTypes {
  email: string;
  password: string;
}

export interface UserTypes {
  id: string;
  username: string;
  email: string;
  name: string;
  avatar: string;
}

export interface JTWPayloadTypes {
  player: UserTypes;
  iat: number;
}

export interface CheckoutTypes {
  voucher: string;
  nominal: string;
  payment: string;
  bank: string;
  name: string;
  accountUser: string;
}

export interface TopUpCategoriesTypes {
  _id: string;
  valeu: number;
  name: string;
}

export interface HistoryVoucherTopupTypes {
  thumbnail: string;
  gameName: string;
  category: string;
  coinQuantity: number;
  coinName: string;
  price: number;
}

export interface HistoryPaymentTypes {
  type: string;
  bankName: string;
  name: string;
  noRekening: string;
}

export interface HistoryTransactionTypes {
  _id: string;
  status: string;
  value: number;
  historyVoucherTopup: HistoryVoucherTopupTypes;
  accountUser: string;
  name: string;
  tax: number;
  historyPayment: HistoryPaymentTypes;
}
